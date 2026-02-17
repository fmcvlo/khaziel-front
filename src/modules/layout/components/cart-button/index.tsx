import { retrieveCart } from "@lib/data/cart"
import CartDropdown from "../cart-dropdown"

export default async function CartButton({ dict }: { dict?: any }) {
  const cart = await retrieveCart().catch(() => null)

  return <CartDropdown cart={cart} dict={dict} />
}
