export enum Environment {
  Dev = 'devnet',
  Prod = 'mainnet',
}

export interface PayVaultConstructorProps {
  storeId: string
  apiKey: string
  endpoint?: string
  environment?: Environment
}

///
/// START CART
///
export interface CartItem {
  productId: number
  // TODO: use quantity instead of amount
  amount: number
}
export interface CreateCartRequest {
  cart: CartItem[]
}

export interface CreateCartResponse {
  message: string
  id: string
}
///
/// END CART
///

///
/// START API KEY
///
export interface ApiKey {
  id: number
  key: string
  storeId: string
  revenue: number
}
export interface CreateApiKeyRequest {
  cart: CartItem[]
}

export interface CreateApiKeyResponse {
  message: string
  id: string
}
///
/// END API KEY
///

///
/// START STORE
///

export type StoreDetails = {
  id: string
  name: string
  logoUrl: string | null
  description: string
  createdAt: string
  updatedAt: string
  products: Product[]
  // TODO: remove
  users?: User[]
  apiKeys?: ApiKey[]
}

export interface StoreDetailsUpdate extends Partial<Pick<StoreDetails, 'name' | 'logoUrl' | 'description'>> {}

export type Product = {
  id: number
  storeId: string
  name: string
  price: string | number
  description?: string
  imageUrl?: string | null
  packageDimensions: null
  shippable: null
  unitLabel: null
  url: null
  active: boolean
  revenue: string
  inventory: number
  sold: number
  createdAt: string
  updatedAt: string
}

export type ProductCreateRequest = Pick<Product, 'price' | 'description' | 'name'>

export type User = {
  id: string
  name: string
  email: string
  emailVerified: null
  image: string
}
///
/// END STORE
///
