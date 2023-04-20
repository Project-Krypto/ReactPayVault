import { useCallback, useEffect } from 'react'

import { useCart } from './useCart'

export const useOneClickCheckout = ({
  productId,
  quantity = 1,
  redirect = true,
}: {
  productId: number
  quantity?: number
  redirect?: boolean
}) => {
  const cart = useCart()

  const triggerCheckout = useCallback(async () => {
    cart.addToCart({ productId, amount: quantity })
    cart.createCheckout()
  }, [productId, quantity])

  useEffect(() => {
    if (cart.cartId === undefined || cart.cartLink === undefined) return
    if (redirect === false) return
    window.open(cart.cartLink, '_blank')
  }, [cart.cartLink, cart.cartId])

  return {
    triggerCheckout,
    ...cart,
    createCheckout: undefined,
  }
}
