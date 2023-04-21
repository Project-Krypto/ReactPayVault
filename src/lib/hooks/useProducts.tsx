import { useQuery } from '@tanstack/react-query'
import { Product } from '../types'

import { useStore } from './useStore'

/**
 * A custom hook that fetches products based on the provided product IDs.
 * If no product IDs are provided, it fetches all products.
 *
 * @param props - An object containing the optional productIds property.
 * @returns An object containing the fetched products and additional query details.
 */
export const useProducts = (props?: { productIds?: (string | number)[] }) => {
  const { productIds } = props ?? {}
  const store = useStore()

  // Fetch the products based on the provided productIds, or all products if productIds is not provided.
  const { data: products, ...queryDetails } = useQuery({
    queryKey: ['useProductsHook', productIds, store],
    queryFn: async () => {
      // If productIds is not provided or is an empty array, return all products.
      if (productIds === undefined || productIds.length === 0) {
        return store.storeDetails?.products ?? []
      }
      const resolvedProducts: Product[] = []
      await Promise.all(
        await productIds.map(async (productId) => {
          const productInfo = await store.client.getProductInfo(productId)
          resolvedProducts.push(productInfo)
        }),
      )
      console.log(resolvedProducts)
      return resolvedProducts
    },
  })

  return {
    products,
    ...queryDetails,
  }
}

/**
 * A custom hook that fetches a single product based on the provided product ID.
 *
 * @param props - An object containing the productId property.
 * @returns An object containing the fetched product and additional query details.
 */
export const useProduct = (props: { productId: string | number }) => {
  const { productId } = props ?? {}
  const store = useStore()

  // Fetch the product based on the provided productId.
  const { data: product, ...queryDetails } = useQuery({
    queryKey: ['useProductHook', productId, store],
    queryFn: async () => {
      return await store.client.getProductInfo(productId)
    },
  })

  return {
    product,
    ...queryDetails,
  }
}
