import { PayVaultConstructorProps, PayVaultStoreProvider } from '@/index'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { createContext, useContext } from 'react'

// import ReactDOM from 'react-dom'

import { PayVault } from '../../PayVault'

/**
 * Interface representing the properties required for the PayVaultProvider component.
 */
export interface PayVaultProviderProps {
  /**
   * The children elements to be rendered within the provider.
   */
  children: React.ReactNode

  /**
   * The PayVault client instance or constructor properties.
   */
  client: PayVaultConstructorProps | PayVault
}

export interface PayVaultContextProps {
  client: PayVault
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60,
    },
  },
})

/**
 * Context used globally to handle authentication and access to store and products
 */
const PayVaultContext = createContext<PayVaultContextProps>({
  client: new PayVault({ apiKey: '', storeId: '' }),
} as PayVaultContextProps)

/**
 * A custom hook to access the PayVaultContext.
 * @returns {PayVaultContextProps} The PayVaultContext properties.
 */
export const usePayVaultContext = (): PayVaultContextProps => useContext(PayVaultContext)

/**
 * A provider component that sets up the QueryClient and PayVaultStoreProvider.
 *
 * @param {Object} props - The properties for the provider component.
 * @param {React.ReactNode} props.children - The children elements to be rendered within the provider.
 * @param {PayVaultConstructorProps | PayVault} props.client - The PayVault client instance or constructor properties.
 * @returns {React.ReactNode} The provider component with the QueryClient and PayVaultStoreProvider setup.
 */
export const PayVaultProvider = (props: PayVaultProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <PayVaultStoreProvider client={props.client}>{props.children}</PayVaultStoreProvider>
    </QueryClientProvider>
  )
}
