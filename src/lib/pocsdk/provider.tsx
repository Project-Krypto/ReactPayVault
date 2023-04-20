import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { createContext } from 'react'

import { PayVaultStoreProvider } from './hooks/useStore'
import { PayVault, PayVaultConstructorProps } from './PayVault'

interface PayVaultContextProps {
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
export const PayVaultContext = createContext<PayVaultContextProps>({
  client: new PayVault({ apiKey: '', storeId: '' }),
} as PayVaultContextProps)

export const PayVaultProvider = ({
  children,
  client,
}: {
  children: React.ReactNode
  client: PayVaultConstructorProps | PayVault
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <PayVaultStoreProvider client={client}>{children}</PayVaultStoreProvider>
    </QueryClientProvider>
  )
}
