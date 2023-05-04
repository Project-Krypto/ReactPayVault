---
id: 'UseOneClickCheckoutResponse'
title: 'Interface: UseOneClickCheckoutResponse'
sidebar_label: 'UseOneClickCheckoutResponse'
sidebar_position: 0
custom_edit_url: null
---

Interface representing the response of the useOneClickCheckout hook.

## Hierarchy

- `Omit`<[`CartContextProps`](CartContextProps.md), `"createCheckout"`\>

  ↳ **`UseOneClickCheckoutResponse`**

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

#### Inherited from

Omit.addToCart

#### Defined in

[hooks/useCart.tsx:23](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useCart.tsx#L23)

---

### cartId

• **cartId**: `undefined` \| `string`

cartId: A string representing the unique identifier of the cart,
or undefined if the cart has not been created yet.

#### Inherited from

Omit.cartId

#### Defined in

[hooks/useCart.tsx:47](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useCart.tsx#L47)

---

### cartItems

• **cartItems**: [`CartItem`](CartItem.md)[]

cartItems: An array of CartItem objects, representing the items
in the shopping cart.

#### Inherited from

Omit.cartItems

#### Defined in

[hooks/useCart.tsx:17](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useCart.tsx#L17)

---

### cartLink

• **cartLink**: `undefined` \| `string`

cartLink: A string representing the URL for the cart's checkout
page, or undefined if the cart has not been created yet.

#### Inherited from

Omit.cartLink

#### Defined in

[hooks/useCart.tsx:53](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useCart.tsx#L53)

---

### isLoading

• **isLoading**: `boolean`

isLoading: A boolean indicating whether the cart is currently
being loaded or modified.

#### Inherited from

Omit.isLoading

#### Defined in

[hooks/useCart.tsx:41](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useCart.tsx#L41)

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

#### Inherited from

Omit.removeFromCart

#### Defined in

[hooks/useCart.tsx:29](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useCart.tsx#L29)

---

### totalCost

• **totalCost**: `number`

Total cost of everything in the cart, in USDC

#### Inherited from

Omit.totalCost

#### Defined in

[hooks/useCart.tsx:58](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useCart.tsx#L58)

---

### triggerCheckout

• **triggerCheckout**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

A function that triggers the checkout process.

##### Returns

`Promise`<`void`\>

#### Defined in

[hooks/useOneClickCheckout.tsx:33](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useOneClickCheckout.tsx#L33)
