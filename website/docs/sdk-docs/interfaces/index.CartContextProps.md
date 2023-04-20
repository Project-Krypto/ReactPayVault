---
id: 'index.CartContextProps'
title: 'Interface: CartContextProps'
sidebar_label: 'index.CartContextProps'
custom_edit_url: null
---

[index](../modules/).CartContextProps

The shape of the context object that provides a set of functions and properties
for managing the shopping cart.

## Properties

### addToCart

• **addToCart**: (`item`: [`CartItem`](.CartItem)) => `void`

#### Type declaration

▸ (`item`): `void`

addToCart: A function that accepts a CartItem object as a parameter
and adds the item to the shopping cart.

##### Parameters

| Name   | Type                    |
| :----- | :---------------------- |
| `item` | [`CartItem`](.CartItem) |

##### Returns

`void`

#### Defined in

lib/pocsdk/hooks/useCart.tsx:22

---

### cartId

• **cartId**: `undefined` \| `string`

cartId: A string representing the unique identifier of the cart,
or undefined if the cart has not been created yet.

#### Defined in

lib/pocsdk/hooks/useCart.tsx:46

---

### cartItems

• **cartItems**: [`CartItem`](.CartItem)[]

cartItems: An array of CartItem objects, representing the items
in the shopping cart.

#### Defined in

lib/pocsdk/hooks/useCart.tsx:16

---

### cartLink

• **cartLink**: `undefined` \| `string`

cartLink: A string representing the URL for the cart's checkout
page, or undefined if the cart has not been created yet.

#### Defined in

lib/pocsdk/hooks/useCart.tsx:52

---

### createCheckout

• **createCheckout**: () => `void`

#### Type declaration

▸ (): `void`

createCheckout: A function that creates a checkout session for
the shopping cart.

##### Returns

`void`

#### Defined in

lib/pocsdk/hooks/useCart.tsx:34

---

### isLoading

• **isLoading**: `boolean`

isLoading: A boolean indicating whether the cart is currently
being loaded or modified.

#### Defined in

lib/pocsdk/hooks/useCart.tsx:40

---

### removeFromCart

• **removeFromCart**: (`id`: `number`) => `void`

#### Type declaration

▸ (`id`): `void`

removeFromCart: A function that accepts an item's ID as a parameter
and removes the corresponding item from the shopping cart.

##### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `number` |

##### Returns

`void`

#### Defined in

lib/pocsdk/hooks/useCart.tsx:28

---

### totalCost

• **totalCost**: `number`

Total cost of everything in the cart, in USDC

#### Defined in

lib/pocsdk/hooks/useCart.tsx:57
