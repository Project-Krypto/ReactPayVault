---
sidebar_position: 0
---

# Installation / Setup

How to get PayVault setup in **5 minutes**.

## Getting Started

### What you'll need

- A PayVault **[Store](https://docusaurus.new)**.

  - An **[Api Key](https://docusaurus.new)** generated for your Store.

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

:::info API Keys
:lock: API Keys would be needed to integrate Checkout, Generate yours [here](https://payvault.com)
:::
:::tip Source Code
:zap: Full source code for the demo app available [here](https://github.com/payvault/checkout-demo-example.git)
:::

## Install the Package

Install the package with your package manager of choice.

```bash
# Functional after we publish to NPM
npm install --save-dev payvault-react
# Or
yarn add -D payvault-react

### For now do the following:

# Clone and install the repo
git clone https://github.com/Project-Krypto/ReactPayVault.git

# Install dependencies
yarn

# Create the Link for the dependency package
yarn link # Run in the "payvault-react" repo

yarn link "payvault-react" # Run in the consuming dependency repo


# Start Developing
yarn watch # in the "payvault-react" repo
yarn dev # in the consuming package

# Now the dependency library will update the consuming library whenever a change is made.
# Meaning, the localhost site will update whenever the library changes for dev testing
```

This will install all dependencies you need to interact with Pay Vault.

## Integrate with your site

### Context Setup

Place the Store context provider around your App

```tsx title="App.tsx"
import { PayVaultProvider } from 'payvault-react'

const API_KEY = `edeeedd5-4672-4293-a3a4-f15bebcb8602`
const STORE_ID = `05323cbf-554d-4c64-929d-7b9081fad769`

function App({ Component, pageProps }: AppProps) {
  return (
    <PayVaultProvider client={{ apiKey: API_KEY, storeId: STORE_ID }}>
      <Component {...pageProps} />
    </PayVaultProvider>
  )
}

export default App
```

### Using hooks

Once the context has been setup, you can use hooks anywhere within the app.

_For more details on these hooks, please see the Provider/Context documentation_

- **Available Hooks:**
  - `useStore()` - Type: **[StoreContextProps](/docs/sdk-docs/interfaces/StoreContextProps)** **[Docs here](/docs/sdk-docs#useclient)**
  - `useCart()` - **[Docs here](/docs/sdk-docs#useclient)**
  - `useOneClickCheckout()` - **[Docs here](/docs/sdk-docs#useclient)**
  - `useProducts()` - **[Docs here](/docs/sdk-docs#useclient)**
  - `useClient()` - **[Docs here](/docs/sdk-docs#useclient)**

```tsx title="storeDetails.tsx"
import { useStore } from 'payvault-react'

function ComponentName(props: any) {
  const { storeDetails, storeId, client, updateStoreInfo, updateLogo, refresh } = useStore()
  return (
    <div>
      <p> Store Id: {storeId} </p>
      <button onClick={(e) => refresh()}>Refresh</button>
      <button onClick={(e) => updateStoreInfo({ ...e })}>Update Store</button>
    </div>
  )
}

export default ComponentName
```

```tsx title="cartManagement.tsx"
import { useCart } from 'payvault-react'

function ComponentName(props: any) {
  const { cartItems, addToCart, removeFromCart, createCheckout } = useCart()
  return (
    <div>
      <button onClick={(e) => addToCart('PRODUCT_ID')}>Add Item to Cart</button>
      <button onClick={(e) => removeFromCart('PRODUCT_ID')}>Remove Item from Cart</button>
      <button onClick={(e) => createCheckout()}>Create Checkout with {cartItems.length} Items</button>
    </div>
  )
}

export default ComponentName
```

### Vault Components

:::danger TBD

Components in library still need to be developed

:::

- Cart Button
- Checkout Button
- Add to Cart Button
