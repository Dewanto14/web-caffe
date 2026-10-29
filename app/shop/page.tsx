import type { Metadata } from "next"
import ShopClient from "./shop-client"

export const metadata: Metadata = {
  title: "Shop Biji Kopi | Kopi Budi Nusantara",
  description: "Belanja retail dan wholesale biji kopi specialty Kopi Budi Nusantara.",
}

export default function ShopPage() {
  return <ShopClient />
}
