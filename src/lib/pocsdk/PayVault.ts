enum Environment {
  Dev = 'devnet',
  Prod = 'mainnet',
}

enum Endpoints {
  Local = 'localhost:3000',
  Dev = 'website.com',
  Prod = 'website.com',
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

export class PayVault {
  public endpoint: string
  public storeId: string
  private apiKey: string
  private env: Environment
  // TODO: Maybe don't require storeId?

  constructor({ apiKey, storeId, endpoint = Endpoints.Local, ...other }: PayVaultConstructorProps) {
    this.apiKey = apiKey
    this.storeId = storeId
    this.env = Environment.Dev
    this.endpoint = endpoint
  }

  get headers() {
    return {
      'x-api-Key': this.apiKey,
      'Content-Type': 'application/json',
    }
  }

  async request(path: string, options: RequestInit = {}) {
    const endpoint = `http://${this.endpoint}${path}`
    console.log(endpoint, path, options)
    return await fetch(endpoint, {
      method: 'GET',
      ...options,
      headers: {
        ...this.headers,
        ...options.headers,
      },
    })
  }

  async uploadFile(path: string, options: RequestInit = {}) {
    const endpoint = `http://${this.endpoint}${path}`
    return await (
      await fetch(endpoint, {
        method: 'POST',
        ...options,
        headers: {
          ...options.headers,
        },
      })
    ).json()
  }

  async requestJson(path: string, options: RequestInit = {}) {
    return await (await this.request(path, options)).json()
  }

  ///
  /// Store
  ///

  async getStoreInfo(): Promise<StoreDetails> {
    return await this.requestJson(`/api/store/${this.storeId}`, {
      method: 'GET',
    })
  }

  // TODO: Break down specifics of store details
  async updateStoreInfo(storeDetails: Partial<StoreDetails>): Promise<StoreDetails> {
    return await this.requestJson(`/api/store/${this.storeId}`, {
      method: 'POST',
      body: JSON.stringify(storeDetails),
    })
  }

  async updateStoreLogo(storeLogo: File): Promise<StoreDetails> {
    const formData = new FormData()
    formData.append('files', storeLogo, storeLogo.type)
    return await this.uploadFile(`/api/store/${this.storeId}/upload`, {
      method: 'POST',
      body: formData,
    })
  }

  async listAvailableStores(): Promise<StoreDetails[]> {
    return await this.requestJson(`/api/store`, {
      method: 'GET',
    })
  }

  async deleteStore(): Promise<any> {
    return await this.requestJson(`/api/store/${this.storeId}`, {
      method: 'DELETE',
    })
  }

  ///
  /// Cart
  ///

  async createCart(cartContent: CreateCartRequest): Promise<CreateCartResponse> {
    return await this.requestJson(`/api/store/${this.storeId}/checkout`, {
      method: 'POST',
      body: JSON.stringify(cartContent),
    })
  }

  ///
  /// Product
  ///

  async createProduct(productDetails: ProductCreateRequest) {
    return await this.requestJson(`/api/store/${this.storeId}/product`, {
      method: 'PUT',
      body: JSON.stringify(productDetails),
    })
  }

  async updateProduct(productId: string, productDetails: ProductCreateRequest) {
    return await this.requestJson(`/api/store/${this.storeId}/product/${productId}`, {
      method: 'POST',
      body: JSON.stringify(productDetails),
    })
  }

  async getProductInfo(productId: string | number): Promise<Product> {
    return await this.requestJson(`/api/store/${this.storeId}/product/${productId}`, {
      method: 'GET',
    })
  }

  async listStoreProducts(): Promise<Product[]> {
    return await this.requestJson(`/api/store/${this.storeId}/product`, {
      method: 'GET',
    })
  }

  async deleteProduct(productId: string | number): Promise<any> {
    return await this.requestJson(`/api/store/${this.storeId}/product/${productId}`, {
      method: 'DELETE',
    })
  }

  async deleteProducts(productIds: (string | number)[]): Promise<any> {
    return await Promise.all(
      productIds.map(async (productId) => {
        return await this.deleteProduct(productId)
      }),
    )
  }

  ///
  /// Api Key
  ///

  async createApiKey(): Promise<ApiKey> {
    return await this.requestJson(`/api/store/${this.storeId}/apiKey/`, {
      method: 'PUT',
      // body: JSON.stringify(productDetails),
    })
  }

  async getApiKey(key: string): Promise<ApiKey> {
    return await this.requestJson(`/api/store/${this.storeId}/apiKey/${key}`, {
      method: 'GET',
    })
  }

  async listApiKey(): Promise<ApiKey[]> {
    return await this.requestJson(`/api/store/${this.storeId}/apiKey`, {
      method: 'GET',
    })
  }

  async deleteApiKey(key: string): Promise<ApiKey> {
    return await this.requestJson(`/api/store/${this.storeId}/apiKey/${key}`, {
      method: 'DELETE',
    })
  }
  async deleteApiKeys(keys: string[]): Promise<ApiKey[]> {
    return await Promise.all(
      keys.map(async (key) => {
        return await this.deleteApiKey(key)
      }),
    )
  }
}

///////////
