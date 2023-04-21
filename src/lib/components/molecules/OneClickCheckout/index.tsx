import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import { useProduct, useOneClickCheckout, useCart } from '@hooks'
import { PayVaultProvider } from '../../providers'
import { ButtonProps } from '../AddToCart'

export const OneClickCheckout = (props: { productId: number; quantity?: number } & ButtonProps) => {
  const { product } = useProduct({ productId: parseInt(`${props.productId}`) })
  const { triggerCheckout } = useOneClickCheckout({
    productId: parseInt(`${props.productId}`),
    quantity: props.quantity,
  })
  return (
    <>
      <button
        onClick={async () => {
          await triggerCheckout()
          console.log('dlsk')
        }}
        {...props}
      >
        {product?.name}
      </button>
    </>
  )
}
