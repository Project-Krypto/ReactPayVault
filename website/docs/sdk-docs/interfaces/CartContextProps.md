---
id: 'CartContextProps'
title: 'Interface: CartContextProps'
sidebar_label: 'CartContextProps'
sidebar_position: 0
custom_edit_url: null
---

The shape of the context object that provides a set of functions and properties
for managing the shopping cart.

## Properties

### addToCart

• **addToCart**: (`item`: [`CartItem`](CartItem.md)) => `void`

#### Type declaration

▸ (`item`): `void`

addToCart: A function that accepts a CartItem object as a parameter
and adds the item to the shopping cart.

##### Parameters

| Name   | Type                      |
| :----- | :------------------------ |
| `item` | [`CartItem`](CartItem.md) |

##### Returns

`void`

#### Defined in

[pocsdk/hooks/useCart.tsx:22](https://github.com/Project-Krypto/ReactPayVault/blob/fe4385f/src/lib/pocsdk/hooks/useCart.tsx#L22)

---

### cartId

• **cartId**: `undefined` \| `string`

cartId: A string representing the unique identifier of the cart,
or undefined if the cart has not been created yet.

#### Defined in

[pocsdk/hooks/useCart.tsx:46](https://github.com/Project-Krypto/ReactPayVault/blob/fe4385f/src/lib/pocsdk/hooks/useCart.tsx#L46)

---

### cartItems

• **cartItems**: [`CartItem`](CartItem.md)[]

cartItems: An array of CartItem objects, representing the items
in the shopping cart.

#### Defined in

[pocsdk/hooks/useCart.tsx:16](https://github.com/Project-Krypto/ReactPayVault/blob/fe4385f/src/lib/pocsdk/hooks/useCart.tsx#L16)

---

### cartLink

• **cartLink**: `undefined` \| `string`

cartLink: A string representing the URL for the cart's checkout
page, or undefined if the cart has not been created yet.

#### Defined in

[pocsdk/hooks/useCart.tsx:52](https://github.com/Project-Krypto/ReactPayVault/blob/fe4385f/src/lib/pocsdk/hooks/useCart.tsx#L52)

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

[pocsdk/hooks/useCart.tsx:34](https://github.com/Project-Krypto/ReactPayVault/blob/fe4385f/src/lib/pocsdk/hooks/useCart.tsx#L34)

---

### isLoading

• **isLoading**: `boolean`

isLoading: A boolean indicating whether the cart is currently
being loaded or modified.

#### Defined in

[pocsdk/hooks/useCart.tsx:40](https://github.com/Project-Krypto/ReactPayVault/blob/fe4385f/src/lib/pocsdk/hooks/useCart.tsx#L40)

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

[pocsdk/hooks/useCart.tsx:28](https://github.com/Project-Krypto/ReactPayVault/blob/fe4385f/src/lib/pocsdk/hooks/useCart.tsx#L28)

---

### totalCost

• **totalCost**: `number`

Total cost of everything in the cart, in USDC

#### Defined in

[pocsdk/hooks/useCart.tsx:57](https://github.com/Project-Krypto/ReactPayVault/blob/fe4385f/src/lib/pocsdk/hooks/useCart.tsx#L57)
