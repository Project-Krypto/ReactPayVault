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

[pocsdk/PayVault.ts:116](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L116)

## Properties

### endpoint

• **endpoint**: `string`

#### Defined in

[pocsdk/PayVault.ts:110](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L110)

---

### storeId

• **storeId**: `string`

#### Defined in

[pocsdk/PayVault.ts:111](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L111)

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

[pocsdk/PayVault.ts:123](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L123)

## Methods

### createApiKey

▸ **createApiKey**(): `Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

#### Returns

`Promise`<[`ApiKey`](../interfaces/ApiKey.md)\>

#### Defined in

[pocsdk/PayVault.ts:258](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L258)

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

[pocsdk/PayVault.ts:203](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L203)

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

[pocsdk/PayVault.ts:214](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L214)

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

[pocsdk/PayVault.ts:277](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L277)

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

[pocsdk/PayVault.ts:282](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L282)

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

[pocsdk/PayVault.ts:240](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L240)

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

[pocsdk/PayVault.ts:246](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L246)

---

### deleteStore

▸ **deleteStore**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[pocsdk/PayVault.ts:193](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L193)

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

[pocsdk/PayVault.ts:265](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L265)

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

[pocsdk/PayVault.ts:228](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L228)

---

### getStoreInfo

▸ **getStoreInfo**(): `Promise`<[`StoreDetails`](../#storedetails)\>

#### Returns

`Promise`<[`StoreDetails`](../#storedetails)\>

#### Defined in

[pocsdk/PayVault.ts:164](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L164)

---

### listApiKey

▸ **listApiKey**(): `Promise`<[`ApiKey`](../interfaces/ApiKey.md)[]\>

#### Returns

`Promise`<[`ApiKey`](../interfaces/ApiKey.md)[]\>

#### Defined in

[pocsdk/PayVault.ts:271](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L271)

---

### listAvailableStores

▸ **listAvailableStores**(): `Promise`<[`StoreDetails`](../#storedetails)[]\>

#### Returns

`Promise`<[`StoreDetails`](../#storedetails)[]\>

#### Defined in

[pocsdk/PayVault.ts:187](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L187)

---

### listStoreProducts

▸ **listStoreProducts**(): `Promise`<[`Product`](../#product)[]\>

#### Returns

`Promise`<[`Product`](../#product)[]\>

#### Defined in

[pocsdk/PayVault.ts:234](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L234)

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

[pocsdk/PayVault.ts:130](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L130)

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

[pocsdk/PayVault.ts:156](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L156)

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

[pocsdk/PayVault.ts:221](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L221)

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

[pocsdk/PayVault.ts:171](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L171)

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

[pocsdk/PayVault.ts:178](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L178)

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

[pocsdk/PayVault.ts:143](https://github.com/Project-Krypto/ReactPayVault/blob/a607b61/src/lib/pocsdk/PayVault.ts#L143)
