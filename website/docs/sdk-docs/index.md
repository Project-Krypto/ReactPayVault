---
id: 'index'
title: 'payvault-react'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [ApiKeyType](enums/ApiKeyType.md)
- [Endpoints](enums/Endpoints.md)
- [Environment](enums/Environment.md)

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
- [OneClickCheckoutProps](interfaces/OneClickCheckoutProps.md)
- [PayVaultConstructorProps](interfaces/PayVaultConstructorProps.md)
- [PayVaultContextProps](interfaces/PayVaultContextProps.md)
- [PayVaultProviderProps](interfaces/PayVaultProviderProps.md)
- [PayVaultStoreProviderProps](interfaces/PayVaultStoreProviderProps.md)
- [StoreContextProps](interfaces/StoreContextProps.md)
- [StoreDetailsUpdate](interfaces/StoreDetailsUpdate.md)
- [UseOneClickCheckoutResponse](interfaces/UseOneClickCheckoutResponse.md)

## Type Aliases

### AtButtonVariant

Ƭ **AtButtonVariant**: keyof typeof [`AT_BUTTON_VARIANT`](#at_button_variant)

#### Defined in

[components/atoms/at-button/index.tsx:8](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/components/atoms/at-button/index.tsx#L8)

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

[types.ts:86](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/types.ts#L86)

---

### ProductCreateRequest

Ƭ **ProductCreateRequest**: `Pick`<[`Product`](#product), `"price"` \| `"description"` \| `"name"`\>

#### Defined in

[types.ts:105](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/types.ts#L105)

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

[types.ts:71](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/types.ts#L71)

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

[types.ts:107](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/types.ts#L107)

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

[components/atoms/at-button/index.tsx:3](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/components/atoms/at-button/index.tsx#L3)

---

### CartContext

• `Const` **CartContext**: `Context`<[`CartContextProps`](interfaces/CartContextProps.md)\>

A context object created using React's createContext function. It
provides default values for the CartContextProps interface.

#### Defined in

[hooks/useCart.tsx:65](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/hooks/useCart.tsx#L65)

---

### StoreContext

• `Const` **StoreContext**: `Context`<[`StoreContextProps`](interfaces/StoreContextProps.md)\>

#### Defined in

[hooks/useStore.tsx:60](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/hooks/useStore.tsx#L60)

---

### queryClient

• `Const` **queryClient**: `QueryClient`

#### Defined in

[components/providers/PayVaultProvider.tsx:28](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/components/providers/PayVaultProvider.tsx#L28)

---

### variantClasses

• `Const` **variantClasses**: `Record`<[`AtButtonVariant`](#atbuttonvariant), `string`\>

#### Defined in

[components/atoms/at-button/index.tsx:10](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/components/atoms/at-button/index.tsx#L10)

## Functions

### AtButton

▸ **AtButton**(`«destructured»`): `Element`

#### Parameters

| Name             | Type                                           |
| :--------------- | :--------------------------------------------- |
| `«destructured»` | [`AtButtonProps`](interfaces/AtButtonProps.md) |

#### Returns

`Element`

#### Defined in

[components/atoms/at-button/index.tsx:22](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/components/atoms/at-button/index.tsx#L22)

---

### MlBanner

▸ **MlBanner**(): `Element`

#### Returns

`Element`

#### Defined in

[components/molecules/ml-banner/index.tsx:1](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/components/molecules/ml-banner/index.tsx#L1)

---

### OrFooter

▸ **OrFooter**(): `Element`

#### Returns

`Element`

#### Defined in

[components/organisms/or-footer/index.tsx:1](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/components/organisms/or-footer/index.tsx#L1)

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

[hooks/useCart.tsx:94](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/hooks/useCart.tsx#L94)

---

### PayVaultProvider

▸ **PayVaultProvider**(`props`): `Element`

A provider component that sets up the QueryClient and PayVaultStoreProvider.

#### Parameters

| Name    | Type                                                           | Description                                |
| :------ | :------------------------------------------------------------- | :----------------------------------------- |
| `props` | [`PayVaultProviderProps`](interfaces/PayVaultProviderProps.md) | The properties for the provider component. |

#### Returns

`Element`

The provider component with the QueryClient and PayVaultStoreProvider setup.

#### Defined in

[components/providers/PayVaultProvider.tsx:58](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/components/providers/PayVaultProvider.tsx#L58)

---

### PayVaultStoreProvider

▸ **PayVaultStoreProvider**(`props`): `Element`

A React context provider component for managing the PayVault store state.

#### Parameters

| Name             | Type                                                                                                      | Description                                              |
| :--------------- | :-------------------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| `props`          | `Object`                                                                                                  | An object containing the children and client properties. |
| `props.children` | `ReactNode`                                                                                               | -                                                        |
| `props.client`   | [`PayVaultConstructorProps`](interfaces/PayVaultConstructorProps.md) \| [`PayVault`](classes/PayVault.md) | -                                                        |

#### Returns

`Element`

The PayVaultStoreProvider component with the provided children.

#### Defined in

[hooks/useStore.tsx:75](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/hooks/useStore.tsx#L75)

---

### useCart

▸ **useCart**(): [`CartContextProps`](interfaces/CartContextProps.md)

A custom hook that returns the CartContext.

#### Returns

[`CartContextProps`](interfaces/CartContextProps.md)

#### Defined in

[hooks/useCart.tsx:85](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/hooks/useCart.tsx#L85)

---

### useClient

▸ **useClient**(): [`PayVault`](classes/PayVault.md)

Hook to retrieve the store client

#### Returns

[`PayVault`](classes/PayVault.md)

#### Defined in

[hooks/useClient.tsx:4](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/hooks/useClient.tsx#L4)

---

### useOneClickCheckout

▸ **useOneClickCheckout**(`props`): [`UseOneClickCheckoutResponse`](interfaces/UseOneClickCheckoutResponse.md)

A custom hook that simplifies the process of adding a product to the cart
and optionally redirecting the user to the cart page.

#### Parameters

| Name    | Type                                                           | Description                        |
| :------ | :------------------------------------------------------------- | :--------------------------------- |
| `props` | [`OneClickCheckoutProps`](interfaces/OneClickCheckoutProps.md) | The input parameters for the hook. |

#### Returns

[`UseOneClickCheckoutResponse`](interfaces/UseOneClickCheckoutResponse.md)

An object containing the triggerCheckout function and
the cart properties without the createCheckout function.

#### Defined in

[hooks/useOneClickCheckout.tsx:44](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/hooks/useOneClickCheckout.tsx#L44)

---

### usePayVaultContext

▸ **usePayVaultContext**(): [`PayVaultContextProps`](interfaces/PayVaultContextProps.md)

A custom hook to access the PayVaultContext.

#### Returns

[`PayVaultContextProps`](interfaces/PayVaultContextProps.md)

The PayVaultContext properties.

#### Defined in

[components/providers/PayVaultProvider.tsx:48](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/components/providers/PayVaultProvider.tsx#L48)

---

### useProduct

▸ **useProduct**(`props`): { `product`: `undefined` \| [`Product`](#product) } \| { `product`: `undefined` \| [`Product`](#product) } \| { `product`: `undefined` \| [`Product`](#product) } \| { `product`: `undefined` \| [`Product`](#product) }

A custom hook that fetches a single product based on the provided product ID.

#### Parameters

| Name              | Type                 | Description                                  |
| :---------------- | :------------------- | :------------------------------------------- |
| `props`           | `Object`             | An object containing the productId property. |
| `props.productId` | `string` \| `number` | -                                            |

#### Returns

{ `product`: `undefined` \| [`Product`](#product) } \| { `product`: `undefined` \| [`Product`](#product) } \| { `product`: `undefined` \| [`Product`](#product) } \| { `product`: `undefined` \| [`Product`](#product) }

An object containing the fetched product and additional query details.

#### Defined in

[hooks/useProducts.tsx:49](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/hooks/useProducts.tsx#L49)

---

### useProducts

▸ **useProducts**(`props?`): { `products`: `undefined` \| [`Product`](#product)[] } \| { `products`: `undefined` \| [`Product`](#product)[] } \| { `products`: `undefined` \| [`Product`](#product)[] } \| { `products`: `undefined` \| [`Product`](#product)[] }

A custom hook that fetches products based on the provided product IDs.
If no product IDs are provided, it fetches all products.

#### Parameters

| Name                | Type                     | Description                                            |
| :------------------ | :----------------------- | :----------------------------------------------------- |
| `props?`            | `Object`                 | An object containing the optional productIds property. |
| `props.productIds?` | (`string` \| `number`)[] | -                                                      |

#### Returns

{ `products`: `undefined` \| [`Product`](#product)[] } \| { `products`: `undefined` \| [`Product`](#product)[] } \| { `products`: `undefined` \| [`Product`](#product)[] } \| { `products`: `undefined` \| [`Product`](#product)[] }

An object containing the fetched products and additional query details.

#### Defined in

[hooks/useProducts.tsx:13](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/hooks/useProducts.tsx#L13)

---

### useStore

▸ **useStore**(): [`StoreContextProps`](interfaces/StoreContextProps.md)

Hook to interact with the Store context

#### Returns

[`StoreContextProps`](interfaces/StoreContextProps.md)

#### Defined in

[hooks/useStore.tsx:67](https://github.com/Project-Krypto/ReactPayVault/blob/4db402f/src/lib/hooks/useStore.tsx#L67)
