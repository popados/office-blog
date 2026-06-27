export const revalidate = 3600;

import ShopView from "@/src/components/ShopView.jsx";
import { PRODUCTS, BRANDS, FEATURED } from "@/src/data/shop.js";

export default function Shop() {
  return <ShopView products={PRODUCTS} initialBrands={BRANDS} featured={FEATURED} />;
}
