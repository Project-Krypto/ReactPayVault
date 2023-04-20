---
id: 'index'
title: 'Module: index'
sidebar_label: 'index'
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [PayVault](../classes/.PayVault)

## Interfaces

- [ApiKey](../interfaces/.ApiKey)
- [AtButtonProps](../interfaces/.AtButtonProps)
- [CartContextProps](../interfaces/.CartContextProps)
- [CartItem](../interfaces/.CartItem)
- [CreateApiKeyRequest](../interfaces/.CreateApiKeyRequest)
- [CreateApiKeyResponse](../interfaces/.CreateApiKeyResponse)
- [CreateCartRequest](../interfaces/.CreateCartRequest)
- [CreateCartResponse](../interfaces/.CreateCartResponse)
- [PayVaultConstructorProps](../interfaces/.PayVaultConstructorProps)

## Type Aliases

### AtButtonVariant

Ƭ **AtButtonVariant**: keyof typeof [`AT_BUTTON_VARIANT`](#at_button_variant)

#### Defined in

lib/components/atoms/at-button/index.tsx:8

---

### Product

Ƭ **Product**: `Object`

#### Type declaration

| Name                | Type                 |
| :------------------ | :------------------- |
| `active`            | `boolean`            |
| `createdAt`         | `string`             |
| `description?`      | `string`             |
| `id`                | `number`             |
| `imageUrl?`         | `string` \| `null`   |
| `inventory`         | `number`             |
| `name`              | `string`             |
| `packageDimensions` | `null`               |
| `price`             | `string` \| `number` |
| `revenue`           | `string`             |
| `shippable`         | `null`               |
| `sold`              | `number`             |
| `storeId`           | `string`             |
| `unitLabel`         | `null`               |
| `updatedAt`         | `string`             |
| `url`               | `null`               |

#### Defined in

lib/pocsdk/PayVault.ts:78

---

### ProductCreateRequest

Ƭ **ProductCreateRequest**: `Pick`<[`Product`](#product), `"price"` \| `"description"` \| `"name"`\>

#### Defined in

lib/pocsdk/PayVault.ts:97

---

### StoreDetails

Ƭ **StoreDetails**: `Object`

#### Type declaration

| Name          | Type                                |
| :------------ | :---------------------------------- |
| `apiKeys?`    | [`ApiKey`](../interfaces/.ApiKey)[] |
| `createdAt`   | `string`                            |
| `description` | `string`                            |
| `id`          | `string`                            |
| `logoUrl`     | `string` \| `null`                  |
| `name`        | `string`                            |
| `products`    | [`Product`](#product)[]             |
| `updatedAt`   | `string`                            |
| `users?`      | [`User`](#user)[]                   |

#### Defined in

lib/pocsdk/PayVault.ts:65

---

### User

Ƭ **User**: `Object`

#### Type declaration

| Name            | Type     |
| :-------------- | :------- |
| `email`         | `string` |
| `emailVerified` | `null`   |
| `id`            | `string` |
| `image`         | `string` |
| `name`          | `string` |

#### Defined in

lib/pocsdk/PayVault.ts:102

## Variables

### AT_BUTTON_VARIANT

• `Const` **AT_BUTTON_VARIANT**: `Object`

#### Type declaration

| Name        | Type          |
| :---------- | :------------ |
| `PRIMARY`   | `"primary"`   |
| `SECONDARY` | `"secondary"` |
| `TERTIARY`  | `"tertiary"`  |

#### Defined in

lib/components/atoms/at-button/index.tsx:3

---

### CartContext

• `Const` **CartContext**: `Context`<[`CartContextProps`](../interfaces/.CartContextProps)\>

A context object created using React's createContext function. It
provides default values for the CartContextProps interface.

#### Defined in

lib/pocsdk/hooks/useCart.tsx:64

---

### StoreContext

• `Const` **StoreContext**: `Context`<`StoreContextProps`\>

#### Defined in

lib/pocsdk/hooks/useStore.tsx:16

---

### variantClasses

• `Const` **variantClasses**: `Record`<[`AtButtonVariant`](#atbuttonvariant), `string`\>

#### Defined in

lib/components/atoms/at-button/index.tsx:10

## Functions

### AddToCart

▸ **AddToCart**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                                       |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `props` | { `productId`: `number` ; `quantity?`: `number` } & `ClassAttributes`<`HTMLButtonElement`\> & `ButtonHTMLAttributes`<`HTMLButtonElement`\> |

#### Returns

`Element`

#### Defined in

lib/pocsdk/components/AddToCart.tsx:11

---

### AtButton

▸ **AtButton**(`«destructured»`): `Element`

#### Parameters

| Name             | Type                                            |
| :--------------- | :---------------------------------------------- |
| `«destructured»` | [`AtButtonProps`](../interfaces/.AtButtonProps) |

#### Returns

`Element`

#### Defined in

lib/components/atoms/at-button/index.tsx:22

---

### MlBanner

▸ **MlBanner**(): `Element`

#### Returns

`Element`

#### Defined in

lib/components/molecules/ml-banner/index.tsx:1

---

### OneClickCheckout

▸ **OneClickCheckout**(`props`): `Element`

#### Parameters

| Name    | Type                                                                                                                                       |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `props` | { `productId`: `number` ; `quantity?`: `number` } & `ClassAttributes`<`HTMLButtonElement`\> & `ButtonHTMLAttributes`<`HTMLButtonElement`\> |

#### Returns

`Element`

#### Defined in

lib/pocsdk/components/AddToCart.tsx:36

---

### OrFooter

▸ **OrFooter**(): `Element`

#### Returns

`Element`

#### Defined in

lib/components/organisms/or-footer/index.tsx:1

---

### PayVaultCartProvider

▸ **PayVaultCartProvider**(`«destructured»`): `Element`

Context provider that manages the state and functions related to the shopping cart.
It accepts children as React nodes and a client as a PayVault instance.

#### Parameters

| Name             | Type                               |
| :--------------- | :--------------------------------- |
| `«destructured»` | `Object`                           |
| › `children`     | `ReactNode`                        |
| › `client`       | [`PayVault`](../classes/.PayVault) |

#### Returns

`Element`

#### Defined in

lib/pocsdk/hooks/useCart.tsx:93

---

### PayVaultStoreProvider

▸ **PayVaultStoreProvider**(`«destructured»`): `Element`

#### Parameters

| Name             | Type                                                                                                        |
| :--------------- | :---------------------------------------------------------------------------------------------------------- |
| `«destructured»` | `Object`                                                                                                    |
| › `children`     | `ReactNode`                                                                                                 |
| › `client`       | [`PayVaultConstructorProps`](../interfaces/.PayVaultConstructorProps) \| [`PayVault`](../classes/.PayVault) |

#### Returns

`Element`

#### Defined in

lib/pocsdk/hooks/useStore.tsx:24

---

### useCart

▸ **useCart**(): [`CartContextProps`](../interfaces/.CartContextProps)

A custom hook that returns the CartContext.

#### Returns

[`CartContextProps`](../interfaces/.CartContextProps)

#### Defined in

lib/pocsdk/hooks/useCart.tsx:84

---

### useClient

▸ **useClient**(): [`PayVault`](../classes/.PayVault)

#### Returns

[`PayVault`](../classes/.PayVault)

#### Defined in

lib/pocsdk/hooks/useClient.tsx:4

---

### useOneClickCheckout

▸ **useOneClickCheckout**(`«destructured»`): `Object`

#### Parameters

| Name             | Type      |
| :--------------- | :-------- |
| `«destructured»` | `Object`  |
| › `productId`    | `number`  |
| › `quantity?`    | `number`  |
| › `redirect?`    | `boolean` |

#### Returns

`Object`

| Name              | Type                                                      | Description                                                                                                                    |
| :---------------- | :-------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `addToCart`       | (`item`: [`CartItem`](../interfaces/.CartItem)) => `void` | addToCart: A function that accepts a CartItem object as a parameter and adds the item to the shopping cart.                    |
| `cartId`          | `undefined` \| `string`                                   | cartId: A string representing the unique identifier of the cart, or undefined if the cart has not been created yet.            |
| `cartItems`       | [`CartItem`](../interfaces/.CartItem)[]                   | cartItems: An array of CartItem objects, representing the items in the shopping cart.                                          |
| `cartLink`        | `undefined` \| `string`                                   | cartLink: A string representing the URL for the cart's checkout page, or undefined if the cart has not been created yet.       |
| `createCheckout`  | `undefined`                                               | -                                                                                                                              |
| `isLoading`       | `boolean`                                                 | isLoading: A boolean indicating whether the cart is currently being loaded or modified.                                        |
| `removeFromCart`  | (`id`: `number`) => `void`                                | removeFromCart: A function that accepts an item's ID as a parameter and removes the corresponding item from the shopping cart. |
| `totalCost`       | `number`                                                  | Total cost of everything in the cart, in USDC                                                                                  |
| `triggerCheckout` | () => `Promise`<`void`\>                                  | -                                                                                                                              |

#### Defined in

lib/pocsdk/hooks/useOneClickCheckout.tsx:6

---

### useProduct

▸ **useProduct**(`props`): { `product`: `undefined` \| [`Product`](#product) } \| { `product`: `undefined` \| [`Product`](#product) } \| { `product`: `undefined` \| [`Product`](#product) } \| { `product`: `undefined` \| [`Product`](#product) }

#### Parameters

| Name              | Type                 |
| :---------------- | :------------------- |
| `props`           | `Object`             |
| `props.productId` | `string` \| `number` |

#### Returns

{ `product`: `undefined` \| [`Product`](#product) } \| { `product`: `undefined` \| [`Product`](#product) } \| { `product`: `undefined` \| [`Product`](#product) } \| { `product`: `undefined` \| [`Product`](#product) }

#### Defined in

lib/pocsdk/hooks/useProducts.tsx:35

---

### useProducts

▸ **useProducts**(`props?`): { `products`: `undefined` \| [`Product`](#product)[] } \| { `products`: `undefined` \| [`Product`](#product)[] } \| { `products`: `undefined` \| [`Product`](#product)[] } \| { `products`: `undefined` \| [`Product`](#product)[] }

#### Parameters

| Name                | Type                     |
| :------------------ | :----------------------- |
| `props?`            | `Object`                 |
| `props.productIds?` | (`string` \| `number`)[] |

#### Returns

{ `products`: `undefined` \| [`Product`](#product)[] } \| { `products`: `undefined` \| [`Product`](#product)[] } \| { `products`: `undefined` \| [`Product`](#product)[] } \| { `products`: `undefined` \| [`Product`](#product)[] }

#### Defined in

lib/pocsdk/hooks/useProducts.tsx:6

---

### useStore

▸ **useStore**(): `StoreContextProps`

#### Returns

`StoreContextProps`

#### Defined in

lib/pocsdk/hooks/useStore.tsx:22
