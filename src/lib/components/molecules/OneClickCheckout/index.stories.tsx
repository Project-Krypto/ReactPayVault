import React from 'react'
import { Story, Meta, StoryFn } from '@storybook/react'

import { OneClickCheckout } from './'
import { PayVaultProvider } from '../../providers'
import { ButtonProps } from '../AddToCart'

export default {
  title: 'Components/OneClickCheckout',
  component: OneClickCheckout,
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
    <OneClickCheckout {...args} />
  </PayVaultProvider>
)

export const Default = Template.bind({})
Default.args = {
  productId: 1,
  quantity: 1,
}
