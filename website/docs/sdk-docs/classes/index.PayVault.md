---
id: 'index.PayVault'
title: 'Class: PayVault'
sidebar_label: 'index.PayVault'
custom_edit_url: null
---

[index](../modules/).PayVault

## Constructors

### constructor

• **new PayVault**(`«destructured»`)

#### Parameters

| Name             | Type                                                                  |
| :--------------- | :-------------------------------------------------------------------- |
| `«destructured»` | [`PayVaultConstructorProps`](../interfaces/.PayVaultConstructorProps) |

#### Defined in

lib/pocsdk/PayVault.ts:120

## Properties

### endpoint

• **endpoint**: `string`

#### Defined in

lib/pocsdk/PayVault.ts:114

---

### storeId

• **storeId**: `string`

#### Defined in

lib/pocsdk/PayVault.ts:115

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

lib/pocsdk/PayVault.ts:132

## Methods

### createApiKey

▸ **createApiKey**(): `Promise`<[`ApiKey`](../interfaces/.ApiKey)\>

#### Returns

`Promise`<[`ApiKey`](../interfaces/.ApiKey)\>

#### Defined in

lib/pocsdk/PayVault.ts:288

---

### createCart

▸ **createCart**(`cartContent`): `Promise`<[`CreateCartResponse`](../interfaces/.CreateCartResponse)\>

#### Parameters

| Name          | Type                                                    |
| :------------ | :------------------------------------------------------ |
| `cartContent` | [`CreateCartRequest`](../interfaces/.CreateCartRequest) |

#### Returns

`Promise`<[`CreateCartResponse`](../interfaces/.CreateCartResponse)\>

#### Defined in

lib/pocsdk/PayVault.ts:210

---

### createProduct

▸ **createProduct**(`productDetails`): `Promise`<`any`\>

#### Parameters

| Name             | Type                                                       |
| :--------------- | :--------------------------------------------------------- |
| `productDetails` | [`ProductCreateRequest`](../modules/#productcreaterequest) |

#### Returns

`Promise`<`any`\>

#### Defined in

lib/pocsdk/PayVault.ts:223

---

### deleteApiKey

▸ **deleteApiKey**(`key`): `Promise`<[`ApiKey`](../interfaces/.ApiKey)\>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`Promise`<[`ApiKey`](../interfaces/.ApiKey)\>

#### Defined in

lib/pocsdk/PayVault.ts:307

---

### deleteApiKeys

▸ **deleteApiKeys**(`keys`): `Promise`<[`ApiKey`](../interfaces/.ApiKey)[]\>

#### Parameters

| Name   | Type       |
| :----- | :--------- |
| `keys` | `string`[] |

#### Returns

`Promise`<[`ApiKey`](../interfaces/.ApiKey)[]\>

#### Defined in

lib/pocsdk/PayVault.ts:312

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

lib/pocsdk/PayVault.ts:263

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

lib/pocsdk/PayVault.ts:274

---

### deleteStore

▸ **deleteStore**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

lib/pocsdk/PayVault.ts:200

---

### getApiKey

▸ **getApiKey**(`key`): `Promise`<[`ApiKey`](../interfaces/.ApiKey)\>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `key` | `string` |

#### Returns

`Promise`<[`ApiKey`](../interfaces/.ApiKey)\>

#### Defined in

lib/pocsdk/PayVault.ts:295

---

### getProductInfo

▸ **getProductInfo**(`productId`): `Promise`<[`Product`](../modules/#product)\>

#### Parameters

| Name        | Type                 |
| :---------- | :------------------- |
| `productId` | `string` \| `number` |

#### Returns

`Promise`<[`Product`](../modules/#product)\>

#### Defined in

lib/pocsdk/PayVault.ts:246

---

### getStoreInfo

▸ **getStoreInfo**(): `Promise`<[`StoreDetails`](../modules/#storedetails)\>

#### Returns

`Promise`<[`StoreDetails`](../modules/#storedetails)\>

#### Defined in

lib/pocsdk/PayVault.ts:171

---

### listApiKey

▸ **listApiKey**(): `Promise`<[`ApiKey`](../interfaces/.ApiKey)[]\>

#### Returns

`Promise`<[`ApiKey`](../interfaces/.ApiKey)[]\>

#### Defined in

lib/pocsdk/PayVault.ts:301

---

### listAvailableStores

▸ **listAvailableStores**(): `Promise`<[`StoreDetails`](../modules/#storedetails)[]\>

#### Returns

`Promise`<[`StoreDetails`](../modules/#storedetails)[]\>

#### Defined in

lib/pocsdk/PayVault.ts:194

---

### listStoreProducts

▸ **listStoreProducts**(): `Promise`<[`Product`](../modules/#product)[]\>

#### Returns

`Promise`<[`Product`](../modules/#product)[]\>

#### Defined in

lib/pocsdk/PayVault.ts:257

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

lib/pocsdk/PayVault.ts:139

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

lib/pocsdk/PayVault.ts:163

---

### updateProduct

▸ **updateProduct**(`productId`, `productDetails`): `Promise`<`any`\>

#### Parameters

| Name             | Type                                                       |
| :--------------- | :--------------------------------------------------------- |
| `productId`      | `string`                                                   |
| `productDetails` | [`ProductCreateRequest`](../modules/#productcreaterequest) |

#### Returns

`Promise`<`any`\>

#### Defined in

lib/pocsdk/PayVault.ts:232

---

### updateStoreInfo

▸ **updateStoreInfo**(`storeDetails`): `Promise`<[`StoreDetails`](../modules/#storedetails)\>

#### Parameters

| Name           | Type                                                   |
| :------------- | :----------------------------------------------------- |
| `storeDetails` | `Partial`<[`StoreDetails`](../modules/#storedetails)\> |

#### Returns

`Promise`<[`StoreDetails`](../modules/#storedetails)\>

#### Defined in

lib/pocsdk/PayVault.ts:178

---

### updateStoreLogo

▸ **updateStoreLogo**(`storeLogo`): `Promise`<[`StoreDetails`](../modules/#storedetails)\>

#### Parameters

| Name        | Type   |
| :---------- | :----- |
| `storeLogo` | `File` |

#### Returns

`Promise`<[`StoreDetails`](../modules/#storedetails)\>

#### Defined in

lib/pocsdk/PayVault.ts:185

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

lib/pocsdk/PayVault.ts:152
