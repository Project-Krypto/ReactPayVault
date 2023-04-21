import React from 'react'
import { Story, Meta, StoryFn } from '@storybook/react'

import { AddToCart, OneClickCheckout, ButtonProps } from './'
import { PayVaultProvider } from '../../providers'

export default {
  title: 'Components/AddToCart',
  component: AddToCart,
  argTypes: {
    productId: {
      control: 'number',
      defaultValue: 1,
    },
    quantity: {
      control: 'number',
      defaultValue: 1,
    },
  },
} as Meta

const Template: StoryFn<ButtonProps & { productId: number; quantity?: number }> = (args) => (
  <PayVaultProvider client={{ storeId: '', apiKey: '' }}>
    <AddToCart {...args} />
  </PayVaultProvider>
)

export const Default = Template.bind({})
Default.args = {
  productId: 1,
  quantity: 1,
}
