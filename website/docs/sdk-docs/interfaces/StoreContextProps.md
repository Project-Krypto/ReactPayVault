---
id: 'StoreContextProps'
title: 'Interface: StoreContextProps'
sidebar_label: 'StoreContextProps'
sidebar_position: 0
custom_edit_url: null
---

Interface representing the properties of the StoreContext.

## Properties

### client

• **client**: [`PayVault`](../classes/PayVault.md)

The PayVault client instance used to interact with the PayVault API.

#### Defined in

[hooks/useStore.tsx:25](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useStore.tsx#L25)

---

### refresh

• **refresh**: () => `void`

#### Type declaration

▸ (): `void`

A function to refresh the store information.

##### Returns

`void`

#### Defined in

[hooks/useStore.tsx:30](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useStore.tsx#L30)

---

### storeDetails

• `Optional` **storeDetails**: [`StoreDetails`](../#storedetails)

An optional StoreDetails object containing information about the store.

#### Defined in

[hooks/useStore.tsx:15](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useStore.tsx#L15)

---

### storeId

• **storeId**: `string`

The unique identifier of the store as a string.

#### Defined in

[hooks/useStore.tsx:20](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useStore.tsx#L20)

---

### updateLogo

• **updateLogo**: (`file`: `any`) => `void`

#### Type declaration

▸ (`file`): `void`

A function to update the store logo.

##### Parameters

| Name   | Type  | Description                       |
| :----- | :---- | :-------------------------------- |
| `file` | `any` | The new logo file to be uploaded. |

##### Returns

`void`

#### Defined in

[hooks/useStore.tsx:42](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useStore.tsx#L42)

---

### updateStoreInfo

• **updateStoreInfo**: (`storeDetails`: [`StoreDetailsUpdate`](StoreDetailsUpdate.md)) => `void`

#### Type declaration

▸ (`storeDetails`): `void`

A function to update the store information.

##### Parameters

| Name           | Type                                          | Description                                                 |
| :------------- | :-------------------------------------------- | :---------------------------------------------------------- |
| `storeDetails` | [`StoreDetailsUpdate`](StoreDetailsUpdate.md) | An object containing the fields to be updated in the store. |

##### Returns

`void`

#### Defined in

[hooks/useStore.tsx:36](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/hooks/useStore.tsx#L36)
