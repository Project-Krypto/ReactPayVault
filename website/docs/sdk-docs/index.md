---
id: 'index'
title: 'payvault-react'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [PayVault](classes/PayVault.md)

## Interfaces

- [ApiKey](interfaces/ApiKey.md)
- [AtButtonProps](interfaces/AtButtonProps.md)
- [CartContextProps](interfaces/CartContextProps.md)
- [CartItem](interfaces/CartItem.md)
- [CreateApiKeyRequest](interfaces/CreateApiKeyRequest.md)
- [CreateApiKeyResponse](interfaces/CreateApiKeyResponse.md)
- [CreateCartRequest](interfaces/CreateCartRequest.md)
- [CreateCartResponse](interfaces/CreateCartResponse.md)
- [PayVaultConstructorProps](interfaces/PayVaultConstructorProps.md)

## Type Aliases

### AtButtonVariant

Ƭ **AtButtonVariant**: keyof typeof [`AT_BUTTON_VARIANT`](#at_button_variant)

#### Defined in

[components/atoms/at-button/index.tsx:8](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/components/atoms/at-button/index.tsx#L8)

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

[pocsdk/PayVault.ts:77](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/PayVault.ts#L77)

---

### ProductCreateRequest

Ƭ **ProductCreateRequest**: `Pick`<[`Product`](#product), `"price"` \| `"description"` \| `"name"`\>

#### Defined in

[pocsdk/PayVault.ts:96](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/PayVault.ts#L96)

---

### StoreDetails

Ƭ **StoreDetails**: `Object`

#### Type declaration

| Name          | Type                               |
| :------------ | :--------------------------------- |
| `apiKeys?`    | [`ApiKey`](interfaces/ApiKey.md)[] |
| `createdAt`   | `string`                           |
| `description` | `string`                           |
| `id`          | `string`                           |
| `logoUrl`     | `string` \| `null`                 |
| `name`        | `string`                           |
| `products`    | [`Product`](#product)[]            |
| `updatedAt`   | `string`                           |
| `users?`      | [`User`](#user)[]                  |

#### Defined in

[pocsdk/PayVault.ts:64](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/PayVault.ts#L64)

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

[pocsdk/PayVault.ts:98](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/PayVault.ts#L98)

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

[components/atoms/at-button/index.tsx:3](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/components/atoms/at-button/index.tsx#L3)

---

### CartContext

• `Const` **CartContext**: `Context`<[`CartContextProps`](interfaces/CartContextProps.md)\>

A context object created using React's createContext function. It
provides default values for the CartContextProps interface.

#### Defined in

[pocsdk/hooks/useCart.tsx:64](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/hooks/useCart.tsx#L64)

---

### StoreContext

• `Const` **StoreContext**: `Context`<`StoreContextProps`\>

#### Defined in

[pocsdk/hooks/useStore.tsx:16](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/hooks/useStore.tsx#L16)

---

### variantClasses

• `Const` **variantClasses**: `Record`<[`AtButtonVariant`](#atbuttonvariant), `string`\>

#### Defined in

[components/atoms/at-button/index.tsx:10](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/components/atoms/at-button/index.tsx#L10)

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

[pocsdk/components/AddToCart.tsx:8](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/components/AddToCart.tsx#L8)

---

### AtButton

▸ **AtButton**(`«destructured»`): `Element`

#### Parameters

| Name             | Type                                           |
| :--------------- | :--------------------------------------------- |
| `«destructured»` | [`AtButtonProps`](interfaces/AtButtonProps.md) |

#### Returns

`Element`

#### Defined in

[components/atoms/at-button/index.tsx:22](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/components/atoms/at-button/index.tsx#L22)

---

### MlBanner

▸ **MlBanner**(): `Element`

#### Returns

`Element`

#### Defined in

[components/molecules/ml-banner/index.tsx:1](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/components/molecules/ml-banner/index.tsx#L1)

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

[pocsdk/components/AddToCart.tsx:30](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/components/AddToCart.tsx#L30)

---

### OrFooter

▸ **OrFooter**(): `Element`

#### Returns

`Element`

#### Defined in

[components/organisms/or-footer/index.tsx:1](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/components/organisms/or-footer/index.tsx#L1)

---

### PayVaultCartProvider

▸ **PayVaultCartProvider**(`«destructured»`): `Element`

Context provider that manages the state and functions related to the shopping cart.
It accepts children as React nodes and a client as a PayVault instance.

#### Parameters

| Name             | Type                              |
| :--------------- | :-------------------------------- |
| `«destructured»` | `Object`                          |
| › `children`     | `ReactNode`                       |
| › `client`       | [`PayVault`](classes/PayVault.md) |

#### Returns

`Element`

#### Defined in

[pocsdk/hooks/useCart.tsx:93](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/hooks/useCart.tsx#L93)

---

### PayVaultStoreProvider

▸ **PayVaultStoreProvider**(`«destructured»`): `Element`

#### Parameters

| Name             | Type                                                                                                      |
| :--------------- | :-------------------------------------------------------------------------------------------------------- |
| `«destructured»` | `Object`                                                                                                  |
| › `children`     | `ReactNode`                                                                                               |
| › `client`       | [`PayVaultConstructorProps`](interfaces/PayVaultConstructorProps.md) \| [`PayVault`](classes/PayVault.md) |

#### Returns

`Element`

#### Defined in

[pocsdk/hooks/useStore.tsx:24](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/hooks/useStore.tsx#L24)

---

### useCart

▸ **useCart**(): [`CartContextProps`](interfaces/CartContextProps.md)

A custom hook that returns the CartContext.

#### Returns

[`CartContextProps`](interfaces/CartContextProps.md)

#### Defined in

[pocsdk/hooks/useCart.tsx:84](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/hooks/useCart.tsx#L84)

---

### useClient

▸ **useClient**(): [`PayVault`](classes/PayVault.md)

#### Returns

[`PayVault`](classes/PayVault.md)

#### Defined in

[pocsdk/hooks/useClient.tsx:3](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/hooks/useClient.tsx#L3)

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

| Name              | Type                                                     | Description                                                                                                                    |
| :---------------- | :------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `addToCart`       | (`item`: [`CartItem`](interfaces/CartItem.md)) => `void` | addToCart: A function that accepts a CartItem object as a parameter and adds the item to the shopping cart.                    |
| `cartId`          | `undefined` \| `string`                                  | cartId: A string representing the unique identifier of the cart, or undefined if the cart has not been created yet.            |
| `cartItems`       | [`CartItem`](interfaces/CartItem.md)[]                   | cartItems: An array of CartItem objects, representing the items in the shopping cart.                                          |
| `cartLink`        | `undefined` \| `string`                                  | cartLink: A string representing the URL for the cart's checkout page, or undefined if the cart has not been created yet.       |
| `createCheckout`  | `undefined`                                              | -                                                                                                                              |
| `isLoading`       | `boolean`                                                | isLoading: A boolean indicating whether the cart is currently being loaded or modified.                                        |
| `removeFromCart`  | (`id`: `number`) => `void`                               | removeFromCart: A function that accepts an item's ID as a parameter and removes the corresponding item from the shopping cart. |
| `totalCost`       | `number`                                                 | Total cost of everything in the cart, in USDC                                                                                  |
| `triggerCheckout` | () => `Promise`<`void`\>                                 | -                                                                                                                              |

#### Defined in

[pocsdk/hooks/useOneClickCheckout.tsx:5](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/hooks/useOneClickCheckout.tsx#L5)

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

[pocsdk/hooks/useProducts.tsx:34](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/hooks/useProducts.tsx#L34)

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

[pocsdk/hooks/useProducts.tsx:6](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/hooks/useProducts.tsx#L6)

---

### useStore

▸ **useStore**(): `StoreContextProps`

#### Returns

`StoreContextProps`

#### Defined in

[pocsdk/hooks/useStore.tsx:22](https://github.com/Project-Krypto/ReactPayVault/blob/a940aba/src/lib/pocsdk/hooks/useStore.tsx#L22)
