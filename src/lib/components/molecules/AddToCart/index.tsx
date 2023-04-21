import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import { useProduct, useOneClickCheckout, useCart } from '@hooks'
import { PayVaultProvider } from '../../providers'

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export const AddToCart = (props: { productId: number; quantity?: number } & ButtonProps) => {
  const { addToCart, removeFromCart, ...cart } = useCart()
  const { product } = useProduct({ productId: parseInt(`${props.productId}`) })

  return (
    <>
      <button
        onClick={() => {
          addToCart({
            productId: props.productId,
            amount: props.quantity ?? 1,
          })
          console.log('dlsk')
        }}
        {...props}
      >
        {product?.name}
      </button>
    </>
  )
}

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
