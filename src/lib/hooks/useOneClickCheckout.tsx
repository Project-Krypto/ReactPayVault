import * as React from 'react'
import { useCallback, useEffect } from 'react'

import { CartContextProps, useCart } from './useCart'

/**
 * Interface for the input parameters of useOneClickCheckout.
 */
export interface OneClickCheckoutProps {
  /**
   * The ID of the product.
   */
  productId: number

  /**
   * The quantity of the product to be added to the cart. Defaults to 1.
   */
  quantity?: number

  /**
   * A boolean value that determines whether to redirect the user to the cart page
   * after adding the product. Defaults to true.
   */
  redirect?: boolean
}

/**
 * Interface representing the response of the useOneClickCheckout hook.
 */
export interface UseOneClickCheckoutResponse extends Omit<CartContextProps, 'createCheckout'> {
  /**
   * A function that triggers the checkout process.
   */
  triggerCheckout: () => Promise<void>
}

/**
 * A custom hook that simplifies the process of adding a product to the cart
 * and optionally redirecting the user to the cart page.
 *
 * @param {OneClickCheckoutProps} props - The input parameters for the hook.
 * @returns {Object} An object containing the triggerCheckout function and
 * the cart properties without the createCheckout function.
 */
export const useOneClickCheckout = ({
  productId,
  quantity = 1,
  redirect = true,
}: OneClickCheckoutProps): UseOneClickCheckoutResponse => {
  const { createCheckout, ...cart } = useCart()

  const triggerCheckout = useCallback(async () => {
    cart.addToCart({ productId, amount: quantity })
    createCheckout()
  }, [productId, quantity])

  // useEffect(() => {
  //   if (cart.cartId === undefined || cart.cartLink === undefined) return
  //   if (redirect === false) return
  //   window.open(cart.cartLink, '_blank')
  // }, [cart.cartLink, cart.cartId])

  return {
    triggerCheckout,
    ...cart,
  }
}
