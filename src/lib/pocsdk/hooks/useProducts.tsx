import { useQuery } from '@tanstack/react-query'

import { useStore } from './useStore'
import { Product } from '../PayVault'

export const useProducts = (props?: { productIds?: (string | number)[] }) => {
  const { productIds } = props ?? {}
  const store = useStore()

  const { data: products, ...queryDetails } = useQuery({
    queryKey: ['useProductsHook', productIds, store],
    queryFn: async () => {
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

export const useProduct = (props: { productId: string | number }) => {
  const { productId } = props ?? {}
  const store = useStore()

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
