---
id: 'PayVault'
title: 'Class: PayVault'
sidebar_label: 'PayVault'
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new PayVault**(`«destructured»`)

Constructs a new PayVault client.

#### Parameters

| Name             | Type                                                                    |
| :--------------- | :---------------------------------------------------------------------- |
| `«destructured»` | [`PayVaultConstructorProps`](../interfaces/PayVaultConstructorProps.md) |

#### Defined in

[PayVault.ts:32](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L32)

## Properties

### endpoint

• **endpoint**: `string`

#### Defined in

[PayVault.ts:19](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L19)

---

### storeId

• **storeId**: `string`

#### Defined in

[PayVault.ts:20](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L20)

## Accessors

### headers

• `get` **headers**(): `Object`

Returns the headers required for API requests, given the current class variables.

#### Returns

`Object`

| Name           | Type     |
| :------------- | :------- |
| `Content-Type` | `string` |
| `x-api-Key`    | `string` |

#### Defined in

[PayVault.ts:42](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L42)

## Methods

### createApiKey

▸ **createApiKey**(): `Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

Creates a new API key.

#### Returns

`Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

A promise that resolves to the created API key.

#### Defined in

[PayVault.ts:249](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L249)

---

### createCart

▸ **createCart**(`cartContent`): `Promise`<[`CreateCartResponse`](../interfaces/CreateCartResponse.md)\>

#### Parameters

| Name          | Type                                                      |
| :------------ | :-------------------------------------------------------- |
| `cartContent` | [`CreateCartRequest`](../interfaces/CreateCartRequest.md) |

#### Returns

`Promise`<[`CreateCartResponse`](../interfaces/CreateCartResponse.md)\>

#### Defined in

[PayVault.ts:160](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L160)

---

### createProduct

▸ **createProduct**(`productDetails`): `Promise`<`any`\>

Creates a new product with the provided details.

#### Parameters

| Name             | Type                                               | Description                               |
| :--------------- | :------------------------------------------------- | :---------------------------------------- |
| `productDetails` | [`ProductCreateRequest`](../#productcreaterequest) | An object containing the product details. |

#### Returns

`Promise`<`any`\>

A promise that resolves when the product is created.

#### Defined in

[PayVault.ts:176](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L176)

---

### deleteApiKey

▸ **deleteApiKey**(`key`): `Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

Deletes the API key with the provided key.

#### Parameters

| Name  | Type     | Description                       |
| :---- | :------- | :-------------------------------- |
| `key` | `string` | The key of the API key to delete. |

#### Returns

`Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

A promise that resolves when the API key is deleted.

#### Defined in

[PayVault.ts:282](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L282)

---

### deleteApiKeys

▸ **deleteApiKeys**(`keys`): `Promise`<[`ApiKey`](../interfaces/ApiKey.md)[]\>

Deletes multiple API keys with the provided keys.

#### Parameters

| Name   | Type       | Description                     |
| :----- | :--------- | :------------------------------ |
| `keys` | `string`[] | An array of API keys to delete. |

#### Returns

`Promise`<[`ApiKey`](../interfaces/ApiKey.md)[]\>

A promise that resolves when all API keys are deleted.

#### Defined in

[PayVault.ts:293](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L293)

---

### deleteProduct

▸ **deleteProduct**(`productId`): `Promise`<`any`\>

Deletes the product with the provided product ID.

#### Parameters

| Name        | Type                 | Description                      |
| :---------- | :------------------- | :------------------------------- |
| `productId` | `string` \| `number` | The ID of the product to delete. |

#### Returns

`Promise`<`any`\>

A promise that resolves when the product is deleted.

#### Defined in

[PayVault.ts:222](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L222)

---

### deleteProducts

▸ **deleteProducts**(`productIds`): `Promise`<`any`\>

Deletes multiple products with the provided product IDs.

#### Parameters

| Name         | Type                     | Description                        |
| :----------- | :----------------------- | :--------------------------------- |
| `productIds` | (`string` \| `number`)[] | An array of product IDs to delete. |

#### Returns

`Promise`<`any`\>

A promise that resolves when all products are deleted.

#### Defined in

[PayVault.ts:233](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L233)

---

### deleteStore

▸ **deleteStore**(): `Promise`<`any`\>

Deletes the store with the provided store ID.

#### Returns

`Promise`<`any`\>

A promise that resolves when the store is deleted.

#### Defined in

[PayVault.ts:150](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L150)

---

### getApiKey

▸ **getApiKey**(`key`): `Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

Retrieves the API key information for the provided key.

#### Parameters

| Name  | Type     | Description                              |
| :---- | :------- | :--------------------------------------- |
| `key` | `string` | The API key to retrieve information for. |

#### Returns

`Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

A promise that resolves to the API key details.

#### Defined in

[PayVault.ts:261](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L261)

---

### getProductInfo

▸ **getProductInfo**(`productId`): `Promise`<[`Product`](../#product)\>

Retrieves the product information for the provided product ID.

#### Parameters

| Name        | Type                 | Description            |
| :---------- | :------------------- | :--------------------- |
| `productId` | `string` \| `number` | The ID of the product. |

#### Returns

`Promise`<[`Product`](../#product)\>

A promise that resolves to the product details.

#### Defined in

[PayVault.ts:201](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L201)

---

### getStoreInfo

▸ **getStoreInfo**(): `Promise`<[`StoreDetails`](../#storedetails)\>

Retrieves the store information for the provided store ID.

#### Returns

`Promise`<[`StoreDetails`](../#storedetails)\>

A promise that resolves to the store details.

#### Defined in

[PayVault.ts:103](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L103)

---

### listApiKey

▸ **listApiKey**(): `Promise`<[`ApiKey`](../interfaces/ApiKey.md)[]\>

Lists all API keys for the current store.

#### Returns

`Promise`<[`ApiKey`](../interfaces/ApiKey.md)[]\>

A promise that resolves to an array of API keys.

#### Defined in

[PayVault.ts:271](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L271)

---

### listAvailableStores

▸ **listAvailableStores**(): `Promise`<[`StoreDetails`](../#storedetails)[]\>

Lists all available stores.

#### Returns

`Promise`<[`StoreDetails`](../#storedetails)[]\>

A promise that resolves to an array of store details.

#### Defined in

[PayVault.ts:140](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L140)

---

### listStoreProducts

▸ **listStoreProducts**(): `Promise`<[`Product`](../#product)[]\>

Lists all products for the current store.

#### Returns

`Promise`<[`Product`](../#product)[]\>

A promise that resolves to an array of products.

#### Defined in

[PayVault.ts:211](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L211)

---

### request

▸ **request**(`path`, `options?`): `Promise`<`Response`\>

Sends an API request to the specified path with the given options.

#### Parameters

| Name      | Type          | Description                        |
| :-------- | :------------ | :--------------------------------- |
| `path`    | `string`      | The path of the API endpoint.      |
| `options` | `RequestInit` | The options for the fetch request. |

#### Returns

`Promise`<`Response`\>

#### Defined in

[PayVault.ts:54](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L54)

---

### requestJson

▸ **requestJson**(`path`, `options?`): `Promise`<`any`\>

Abstraction on the standard request, but forces the response to json.

#### Parameters

| Name      | Type          | Description                        |
| :-------- | :------------ | :--------------------------------- |
| `path`    | `string`      | The path of the API endpoint.      |
| `options` | `RequestInit` | The options for the fetch request. |

#### Returns

`Promise`<`any`\>

#### Defined in

[PayVault.ts:91](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L91)

---

### updateProduct

▸ **updateProduct**(`productId`, `productDetails`): `Promise`<`any`\>

Updates the product with the provided product ID and details.

#### Parameters

| Name             | Type                                               | Description                               |
| :--------------- | :------------------------------------------------- | :---------------------------------------- |
| `productId`      | `string`                                           | The ID of the product to update.          |
| `productDetails` | [`ProductCreateRequest`](../#productcreaterequest) | An object containing the product details. |

#### Returns

`Promise`<`any`\>

A promise that resolves when the product is updated.

#### Defined in

[PayVault.ts:189](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L189)

---

### updateStoreInfo

▸ **updateStoreInfo**(`storeDetails`): `Promise`<[`StoreDetails`](../#storedetails)\>

Updates the store information with the provided details.

#### Parameters

| Name           | Type                                                        | Description                                              |
| :------------- | :---------------------------------------------------------- | :------------------------------------------------------- |
| `storeDetails` | [`StoreDetailsUpdate`](../interfaces/StoreDetailsUpdate.md) | A partial object containing the store details to update. |

#### Returns

`Promise`<[`StoreDetails`](../#storedetails)\>

A promise that resolves to the updated store details.

#### Defined in

[PayVault.ts:115](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L115)

---

### updateStoreLogo

▸ **updateStoreLogo**(`storeLogo`): `Promise`<[`StoreDetails`](../#storedetails)\>

Updates the store logo with the provided file.

#### Parameters

| Name        | Type   | Description                                    |
| :---------- | :----- | :--------------------------------------------- |
| `storeLogo` | `File` | A File object representing the new store logo. |

#### Returns

`Promise`<[`StoreDetails`](../#storedetails)\>

A promise that resolves to the updated store details.

#### Defined in

[PayVault.ts:127](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L127)

---

### uploadFile

▸ **uploadFile**(`path`, `options?`): `Promise`<`any`\>

Uploads a file to the specified path with the given options.

#### Parameters

| Name      | Type          | Description                        |
| :-------- | :------------ | :--------------------------------- |
| `path`    | `string`      | The path of the API endpoint.      |
| `options` | `RequestInit` | The options for the fetch request. |

#### Returns

`Promise`<`any`\>

#### Defined in

[PayVault.ts:73](https://github.com/Project-Krypto/ReactPayVault/blob/208ee24/src/lib/PayVault.ts#L73)
