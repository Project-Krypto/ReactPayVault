import {
  ApiKey,
  CreateCartRequest,
  CreateCartResponse,
  Environment,
  PayVaultConstructorProps,
  Product,
  ProductCreateRequest,
  StoreDetails,
  StoreDetailsUpdate,
} from './types'

export enum Endpoints {
  Local = 'localhost:3000',
  Dev = 'website.com',
  Prod = 'website.com',
}
export class PayVault {
  public endpoint: string
  public storeId: string
  private apiKey: string
  private env: Environment
  // TODO: Maybe don't require storeId?

  /**
   * Constructs a new PayVault client.
   * @param apiKey - The API key used to authenticate with the PayVault API.
   * @param storeId - The unique identifier of the store.
   * @param endpoint - The API endpoint to use, defaults to Endpoints.Local.
   * @param other - Other configuration properties.
   */
  constructor({ apiKey, storeId, endpoint = Endpoints.Local, ...other }: PayVaultConstructorProps) {
    this.apiKey = apiKey
    this.storeId = storeId
    this.env = Environment.Dev
    this.endpoint = endpoint
  }

  /**
   * Returns the headers required for API requests, given the current class variables.
   */
  get headers() {
    return {
      'x-api-Key': this.apiKey,
      'Content-Type': 'application/json',
    }
  }

  /**
   * Sends an API request to the specified path with the given options.
   * @param path - The path of the API endpoint.
   * @param options - The options for the fetch request.
   */
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

  /**
   * Uploads a file to the specified path with the given options.
   * @param path - The path of the API endpoint.
   * @param options - The options for the fetch request.
   */

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

  /**
   * Abstraction on the standard request, but forces the response to json.
   * @param path - The path of the API endpoint.
   * @param options - The options for the fetch request.
   */
  async requestJson(path: string, options: RequestInit = {}) {
    return await (await this.request(path, options)).json()
  }

  ///
  /// Store
  ///

  /**
   * Retrieves the store information for the provided store ID.
   * @returns {Promise<StoreDetails>} A promise that resolves to the store details.
   */
  async getStoreInfo(): Promise<StoreDetails> {
    return await this.requestJson(`/api/store/${this.storeId}`, {
      method: 'GET',
    })
  }

  // TODO: Break down specifics of store details
  /**
   * Updates the store information with the provided details.
   * @param storeDetails - A partial object containing the store details to update.
   * @returns {Promise<StoreDetails>} A promise that resolves to the updated store details.
   */
  async updateStoreInfo(storeDetails: StoreDetailsUpdate): Promise<StoreDetails> {
    return await this.requestJson(`/api/store/${this.storeId}`, {
      method: 'POST',
      body: JSON.stringify(storeDetails),
    })
  }

  /**
   * Updates the store logo with the provided file.
   * @param storeLogo - A File object representing the new store logo.
   * @returns {Promise<StoreDetails>} A promise that resolves to the updated store details.
   */
  async updateStoreLogo(storeLogo: File): Promise<StoreDetails> {
    const formData = new FormData()
    formData.append('files', storeLogo, storeLogo.type)
    return await this.uploadFile(`/api/store/${this.storeId}/upload`, {
      method: 'POST',
      body: formData,
    })
  }

  /**
   * Lists all available stores.
   * @returns {Promise<StoreDetails[]>} A promise that resolves to an array of store details.
   */
  async listAvailableStores(): Promise<StoreDetails[]> {
    return await this.requestJson(`/api/store`, {
      method: 'GET',
    })
  }

  /**
   * Deletes the store with the provided store ID.
   * @returns {Promise<any>} A promise that resolves when the store is deleted.
   */
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

  /**
   * Creates a new product with the provided details.
   * @param productDetails - An object containing the product details.
   * @returns {Promise<any>} A promise that resolves when the product is created.
   */
  async createProduct(productDetails: ProductCreateRequest): Promise<any> {
    return await this.requestJson(`/api/store/${this.storeId}/product`, {
      method: 'PUT',
      body: JSON.stringify(productDetails),
    })
  }

  /**
   * Updates the product with the provided product ID and details.
   * @param productId - The ID of the product to update.
   * @param productDetails - An object containing the product details.
   * @returns {Promise<any>} A promise that resolves when the product is updated.
   */
  async updateProduct(productId: string, productDetails: ProductCreateRequest): Promise<any> {
    return await this.requestJson(`/api/store/${this.storeId}/product/${productId}`, {
      method: 'POST',
      body: JSON.stringify(productDetails),
    })
  }

  /**
   * Retrieves the product information for the provided product ID.
   * @param productId - The ID of the product.
   * @returns {Promise<Product>} A promise that resolves to the product details.
   */
  async getProductInfo(productId: string | number): Promise<Product> {
    return await this.requestJson(`/api/store/${this.storeId}/product/${productId}`, {
      method: 'GET',
    })
  }

  /**
   * Lists all products for the current store.
   * @returns {Promise<Product[]>} A promise that resolves to an array of products.
   */
  async listStoreProducts(): Promise<Product[]> {
    return await this.requestJson(`/api/store/${this.storeId}/product`, {
      method: 'GET',
    })
  }

  /**
   * Deletes the product with the provided product ID.
   * @param productId - The ID of the product to delete.
   * @returns {Promise<any>} A promise that resolves when the product is deleted.
   */
  async deleteProduct(productId: string | number): Promise<any> {
    return await this.requestJson(`/api/store/${this.storeId}/product/${productId}`, {
      method: 'DELETE',
    })
  }

  /**
   * Deletes multiple products with the provided product IDs.
   * @param productIds - An array of product IDs to delete.
   * @returns {Promise<any>} A promise that resolves when all products are deleted.
   */
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

  /**
   * Creates a new API key.
   * @returns {Promise<ApiKey>} A promise that resolves to the created API key.
   */
  async createApiKey(): Promise<ApiKey> {
    return await this.requestJson(`/api/store/${this.storeId}/apiKey/`, {
      method: 'PUT',
      // body: JSON.stringify(productDetails),
    })
  }

  /**
   * Retrieves the API key information for the provided key.
   * @param key - The API key to retrieve information for.
   * @returns {Promise<ApiKey>} A promise that resolves to the API key details.
   */
  async getApiKey(key: string): Promise<ApiKey> {
    return await this.requestJson(`/api/store/${this.storeId}/apiKey/${key}`, {
      method: 'GET',
    })
  }

  /**
   * Lists all API keys for the current store.
   * @returns {Promise<ApiKey[]>} A promise that resolves to an array of API keys.
   */
  async listApiKey(): Promise<ApiKey[]> {
    return await this.requestJson(`/api/store/${this.storeId}/apiKey`, {
      method: 'GET',
    })
  }

  /**
   * Deletes the API key with the provided key.
   * @param key - The key of the API key to delete.
   * @returns {Promise<ApiKey>} A promise that resolves when the API key is deleted.
   */
  async deleteApiKey(key: string): Promise<ApiKey> {
    return await this.requestJson(`/api/store/${this.storeId}/apiKey/${key}`, {
      method: 'DELETE',
    })
  }

  /**
   * Deletes multiple API keys with the provided keys.
   * @param keys - An array of API keys to delete.
   * @returns {Promise<ApiKey[]>} A promise that resolves when all API keys are deleted.
   */
  async deleteApiKeys(keys: string[]): Promise<ApiKey[]> {
    return await Promise.all(
      keys.map(async (key) => {
        return await this.deleteApiKey(key)
      }),
    )
  }
}
