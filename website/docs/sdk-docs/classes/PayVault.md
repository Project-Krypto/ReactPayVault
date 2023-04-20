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

#### Parameters

| Name             | Type                                                                    |
| :--------------- | :---------------------------------------------------------------------- |
| `«destructured»` | [`PayVaultConstructorProps`](../interfaces/PayVaultConstructorProps.md) |

#### Defined in

pocsdk/PayVault.ts:120

## Properties

### endpoint

• **endpoint**: `string`

#### Defined in

pocsdk/PayVault.ts:114

---

### storeId

• **storeId**: `string`

#### Defined in

pocsdk/PayVault.ts:115

## Accessors

### headers

• `get` **headers**(): `Object`

#### Returns

`Object`

| Name           | Type     |
| :------------- | :------- |
| `Content-Type` | `string` |
| `x-api-Key`    | `string` |

#### Defined in

pocsdk/PayVault.ts:132

## Methods

### createApiKey

▸ **createApiKey**(): `Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

#### Returns

`Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

#### Defined in

pocsdk/PayVault.ts:288

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

pocsdk/PayVault.ts:210

---

### createProduct

▸ **createProduct**(`productDetails`): `Promise`<`any`\>

#### Parameters

| Name             | Type                                               |
| :--------------- | :------------------------------------------------- |
| `productDetails` | [`ProductCreateRequest`](../#productcreaterequest) |

#### Returns

`Promise`<`any`\>

#### Defined in

pocsdk/PayVault.ts:223

---

### deleteApiKey

▸ **deleteApiKey**(`key`): `Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

#### Defined in

pocsdk/PayVault.ts:307

---

### deleteApiKeys

▸ **deleteApiKeys**(`keys`): `Promise`<[`ApiKey`](../interfaces/ApiKey.md)[]\>

#### Parameters

| Name   | Type       |
| :----- | :--------- |
| `keys` | `string`[] |

#### Returns

`Promise`<[`ApiKey`](../interfaces/ApiKey.md)[]\>

#### Defined in

pocsdk/PayVault.ts:312

---

### deleteProduct

▸ **deleteProduct**(`productId`): `Promise`<`any`\>

#### Parameters

| Name        | Type                 |
| :---------- | :------------------- |
| `productId` | `string` \| `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

pocsdk/PayVault.ts:263

---

### deleteProducts

▸ **deleteProducts**(`productIds`): `Promise`<`any`\>

#### Parameters

| Name         | Type                     |
| :----------- | :----------------------- |
| `productIds` | (`string` \| `number`)[] |

#### Returns

`Promise`<`any`\>

#### Defined in

pocsdk/PayVault.ts:274

---

### deleteStore

▸ **deleteStore**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

pocsdk/PayVault.ts:200

---

### getApiKey

▸ **getApiKey**(`key`): `Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

#### Defined in

pocsdk/PayVault.ts:295

---

### getProductInfo

▸ **getProductInfo**(`productId`): `Promise`<[`Product`](../#product)\>

#### Parameters

| Name        | Type                 |
| :---------- | :------------------- |
| `productId` | `string` \| `number` |

#### Returns

`Promise`<[`Product`](../#product)\>

#### Defined in

pocsdk/PayVault.ts:246

---

### getStoreInfo

▸ **getStoreInfo**(): `Promise`<[`StoreDetails`](../#storedetails)\>

#### Returns

`Promise`<[`StoreDetails`](../#storedetails)\>

#### Defined in

pocsdk/PayVault.ts:171

---

### listApiKey

▸ **listApiKey**(): `Promise`<[`ApiKey`](../interfaces/ApiKey.md)[]\>

#### Returns

`Promise`<[`ApiKey`](../interfaces/ApiKey.md)[]\>

#### Defined in

pocsdk/PayVault.ts:301

---

### listAvailableStores

▸ **listAvailableStores**(): `Promise`<[`StoreDetails`](../#storedetails)[]\>

#### Returns

`Promise`<[`StoreDetails`](../#storedetails)[]\>

#### Defined in

pocsdk/PayVault.ts:194

---

### listStoreProducts

▸ **listStoreProducts**(): `Promise`<[`Product`](../#product)[]\>

#### Returns

`Promise`<[`Product`](../#product)[]\>

#### Defined in

pocsdk/PayVault.ts:257

---

### request

▸ **request**(`path`, `options?`): `Promise`<`Response`\>

#### Parameters

| Name      | Type          |
| :-------- | :------------ |
| `path`    | `string`      |
| `options` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Defined in

pocsdk/PayVault.ts:139

---

### requestJson

▸ **requestJson**(`path`, `options?`): `Promise`<`any`\>

#### Parameters

| Name      | Type          |
| :-------- | :------------ |
| `path`    | `string`      |
| `options` | `RequestInit` |

#### Returns

`Promise`<`any`\>

#### Defined in

pocsdk/PayVault.ts:163

---

### updateProduct

▸ **updateProduct**(`productId`, `productDetails`): `Promise`<`any`\>

#### Parameters

| Name             | Type                                               |
| :--------------- | :------------------------------------------------- |
| `productId`      | `string`                                           |
| `productDetails` | [`ProductCreateRequest`](../#productcreaterequest) |

#### Returns

`Promise`<`any`\>

#### Defined in

pocsdk/PayVault.ts:232

---

### updateStoreInfo

▸ **updateStoreInfo**(`storeDetails`): `Promise`<[`StoreDetails`](../#storedetails)\>

#### Parameters

| Name           | Type                                           |
| :------------- | :--------------------------------------------- |
| `storeDetails` | `Partial`<[`StoreDetails`](../#storedetails)\> |

#### Returns

`Promise`<[`StoreDetails`](../#storedetails)\>

#### Defined in

pocsdk/PayVault.ts:178

---

### updateStoreLogo

▸ **updateStoreLogo**(`storeLogo`): `Promise`<[`StoreDetails`](../#storedetails)\>

#### Parameters

| Name        | Type   |
| :---------- | :----- |
| `storeLogo` | `File` |

#### Returns

`Promise`<[`StoreDetails`](../#storedetails)\>

#### Defined in

pocsdk/PayVault.ts:185

---

### uploadFile

▸ **uploadFile**(`path`, `options?`): `Promise`<`any`\>

#### Parameters

| Name      | Type          |
| :-------- | :------------ |
| `path`    | `string`      |
| `options` | `RequestInit` |

#### Returns

`Promise`<`any`\>

#### Defined in

pocsdk/PayVault.ts:152
