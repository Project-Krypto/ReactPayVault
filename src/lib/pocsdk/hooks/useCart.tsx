import { useMutation } from '@tanstack/react-query'
import React, { createContext, useContext, useMemo, useState } from 'react'

import { useStore } from './useStore'
import { CartItem, PayVault } from '../PayVault'

/**
 * The shape of the context object that provides a set of functions and properties
 * for managing the shopping cart.
 */
export interface CartContextProps {
  /**
   * cartItems: An array of CartItem objects, representing the items
   * in the shopping cart.
   */
  cartItems: CartItem[]

  /**
   * addToCart: A function that accepts a CartItem object as a parameter
   * and adds the item to the shopping cart.
   */
  addToCart: (item: CartItem) => void

  /**
   * removeFromCart: A function that accepts an item's ID as a parameter
   * and removes the corresponding item from the shopping cart.
   */
  removeFromCart: (id: number) => void

  /**
   * createCheckout: A function that creates a checkout session for
   * the shopping cart.
   */
  createCheckout: () => void

  /**
   * isLoading: A boolean indicating whether the cart is currently
   * being loaded or modified.
   */
  isLoading: boolean

  /**
   * cartId: A string representing the unique identifier of the cart,
   * or undefined if the cart has not been created yet.
   */
  cartId: undefined | string

  /**
   * cartLink: A string representing the URL for the cart's checkout
   * page, or undefined if the cart has not been created yet.
   */
  cartLink: undefined | string

  /**
   * Total cost of everything in the cart, in USDC
   */
  totalCost: number
}

/**
 * A context object created using React's createContext function. It
 * provides default values for the CartContextProps interface.
 */
export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {
    console.log('addToCart')
  },
  removeFromCart: () => {
    console.log('removeFromCart')
  },
  createCheckout: () => {
    console.log('checkout')
  },
  isLoading: false,
  cartId: undefined,
  cartLink: undefined,
  totalCost: 0,
})

/**
 * A custom hook that returns the CartContext.
 */
export const useCart = () => useContext(CartContext)

/**
 * Context provider that manages  the state and functions related to the shopping cart.
 * It accepts children as React nodes and a client as a PayVault instance.
 *
 * @param children - React nodes to be rendered within the provider.
 * @param client - A PayVault instance used for interacting with the payment API.
 */
export const PayVaultCartProvider = ({ children, client }: { children: React.ReactNode; client: PayVault }) => {
  const store = useStore()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartId, setCartId] = useState<string | undefined>(undefined)

  const cartLink = useMemo(() => {
    if (cartId === undefined) return undefined
    return `https://${client.endpoint}/checkout/${cartId}`
  }, [])

  const vaultClient = useMemo(() => {
    if (client instanceof PayVault) {
      return client
    }
    return new PayVault(client)
  }, [client])

  /**
   * Adds an item to the cart or increments its quantity if it already exists.
   *
   * @param item - The CartItem to be added to the cart.
   */
  const addToCart = (item: CartItem) => {
    if (item === undefined) return
    item.amount = parseInt(`${item.amount}`)
    setCartItems((prevCartItems: CartItem[]) => {
      console.log(prevCartItems)
      // Check if item already exists in cart
      const existingItemIndex = prevCartItems.findIndex((cartItem) => {
        console.log(cartItem)
        return cartItem.productId === item.productId
      })

      // If item already exists, increment its quantity
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems]
        updatedCartItems[existingItemIndex].amount += item.amount
        return updatedCartItems
      }

      // Otherwise, add new item to cart
      return [...prevCartItems, item]
    })
  }

  const totalCost = useMemo(() => {
    if (store.storeDetails === undefined || store.storeDetails.products === undefined) {
      return 0
    }
    let tmpTotalCost = 0
    // For each cart item, find the matching item in the store and calculate the price for our selected quantity
    cartItems.forEach((item) => {
      const matchingItem = store.storeDetails?.products.find((storeItem) => storeItem.id === item.productId)
      if (matchingItem === undefined) return
      tmpTotalCost += Math.max(item.amount * parseFloat(`${matchingItem?.price ?? 0}`), 0)
    })
    return tmpTotalCost
  }, [store.storeDetails, cartItems])

  /**
   * Removes an item from the cart based on its ID.
   *
   * @param id - The ID of the item to be removed from the cart.
   */
  const removeFromCart = (id: number) => {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.productId !== id))
  }

  /**
   * Creates a checkout session for the shopping cart by calling
   * the vaultClient.createCart method.
   */
  const { isLoading, mutate: createCheckout } = useMutation({
    mutationFn: async () => {
      console.log('Checking out with items:', cartItems)
      const response = await vaultClient.createCart({
        cart: cartItems,
      })
      console.log(response)
      setCartId(response.id)
      return response
    },
  })

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        createCheckout,
        isLoading,
        cartId,
        cartLink,
        totalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
