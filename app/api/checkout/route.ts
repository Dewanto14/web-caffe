import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { PRODUCTS } from '@/lib/products'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const items = Array.isArray(body.items) ? body.items : []
    const customer = body.customer
    const shipping = body.shipping
    const paymentMethod = body.paymentMethod === 'qris' ? 'qris' : 'stripe'
    if (!items.length) return NextResponse.json({ error: 'Keranjang kosong.' }, { status: 400 })
    if (!customer || typeof customer.name !== 'string' || typeof customer.email !== 'string' || typeof customer.phone !== 'string' || typeof customer.address !== 'string' || !customer.name.trim() || !customer.email.trim() || !customer.phone.trim() || !customer.address.trim()) return NextResponse.json({ error: 'Detail customer dan alamat pengiriman wajib diisi.' }, { status: 400 })

    const lineItems = items.map((item: { id?: unknown; quantity?: unknown }) => {
      const product = PRODUCTS.find((entry) => entry.id === item.id)
      const quantity = Number(item.quantity)
      if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 100) throw new Error('Produk atau jumlah tidak valid.')
      return { price_data: { currency: 'idr', product_data: { name: product.name, description: product.description }, unit_amount: product.priceInCents }, quantity }
    })

    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${request.headers.get('origin') || 'http://localhost:3000'}/shop?status=success`,
      cancel_url: `${request.headers.get('origin') || 'http://localhost:3000'}/shop?status=cancelled`,
      customer_email: customer.email.trim(),
      metadata: { customer_name: customer.name.trim(), customer_phone: customer.phone.trim(), shipping_address: customer.address.trim(), shipping_method: shipping?.name || 'Belum dipilih', payment_method: paymentMethod },
    })
    return NextResponse.json({ url: session.url })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Checkout gagal.' }, { status: 400 })
  }
}
