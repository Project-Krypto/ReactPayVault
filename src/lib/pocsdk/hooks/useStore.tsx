import { useMutation, useQuery } from '@tanstack/react-query'
import React, { createContext, useContext, useMemo } from 'react'

import { PayVaultCartProvider } from './useCart'
import { PayVault, PayVaultConstructorProps, StoreDetails } from '../PayVault'

interface StoreContextProps {
  storeDetails: StoreDetails | undefined
  storeId: string
  client: PayVault
  refresh: () => void
  updateStoreInfo: (a: any) => void
  updateLogo: (a: any) => void
}

export const StoreContext = createContext<StoreContextProps>({
  storeDetails: {},
  storeId: '',
  client: new PayVault({ apiKey: '', storeId: '' }),
} as StoreContextProps)

export const useStore = () => useContext(StoreContext)

export const PayVaultStoreProvider = ({
  children,
  client,
}: {
  children: React.ReactNode
  client: PayVaultConstructorProps | PayVault
}) => {
  const vaultClient = useMemo(() => {
    if (client instanceof PayVault) {
      return client
    }
    return new PayVault(client)
  }, [client])

  const { data, refetch } = useQuery({
    queryFn: async () => {
      const retrieveStoreResponse = await vaultClient.getStoreInfo()
      console.log(retrieveStoreResponse)
      return retrieveStoreResponse
    },
  })

  const { mutate: updateLogo } = useMutation({
    mutationFn: async (file: File) => {
      const response = await vaultClient.updateStoreLogo(file)
      console.log(response)
      return response
    },
    onSuccess: () => {
      // Refetch store on success to update everything
      refetch()
    },
  })

  const { mutate: updateStoreInfo } = useMutation({
    mutationFn: async (storeUpdateProps: any) => {
      const response = await vaultClient.updateStoreInfo(storeUpdateProps)
      console.log(response)
      return response
    },
    onSuccess: () => {
      // Refetch store on success to update everything
      refetch()
    },
  })

  return (
    <StoreContext.Provider
      value={{
        storeId: vaultClient.storeId,
        storeDetails: data,
        client: vaultClient,
        refresh: refetch,
        updateStoreInfo,
        updateLogo,
      }}
    >
      <PayVaultCartProvider client={vaultClient}>{children}</PayVaultCartProvider>
    </StoreContext.Provider>
  )
}
