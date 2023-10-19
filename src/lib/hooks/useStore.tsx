import { useMutation, useQuery } from '@tanstack/react-query'
import React, { createContext, useContext, useMemo, useState } from 'react'

import { PayVaultCartProvider } from './useCart'
import { PayVault } from '../PayVault'
import { PayVaultConstructorProps, StoreDetails, StoreDetailsUpdate } from '../types'

/**
 * Interface representing the properties of the StoreContext.
 */
export interface StoreContextProps {
  /**
   * An optional StoreDetails object containing information about the store.
   */
  storeDetails?: StoreDetails

  /**
   * The unique identifier of the store as a string.
   */
  storeId: string

  /**
   * The PayVault client instance used to interact with the PayVault API.
   */
  client: PayVault

  /**
   * A function to refresh the store information.
   */
  refresh: () => void

  /**
   * A function to update the store information.
   * @param storeDetails - An object containing the fields to be updated in the store.
   */
  updateStoreInfo: (storeDetails: StoreDetailsUpdate) => void

  /**
   * A function to update the store logo.
   * @param file - The new logo file to be uploaded.
   */
  updateLogo: (file: File | File[] | any) => void

  updateStoreId: (storeId: string) => void
}

/**
 * Interface representing the input properties for the PayVaultStoreProvider component.
 */
export interface PayVaultStoreProviderProps {
  /**
   * The children elements to render within the PayVaultStoreProvider component.
   */
  children: React.ReactNode

  /**
   * The PayVault client instance or the constructor properties to create a new PayVault instance.
   */
  client: PayVaultConstructorProps | PayVault
}

export const StoreContext = createContext<StoreContextProps>({
  storeDetails: {},
  storeId: '',
  client: new PayVault({ apiKey: '', storeId: '' }),
} as StoreContextProps)

/** Hook to interact with the Store context */
export const useStore = () => useContext(StoreContext)

/**
 * A React context provider component for managing the PayVault store state.
 *
 * @param props - An object containing the children and client properties.
 * @returns The PayVaultStoreProvider component with the provided children.
 */
export const PayVaultStoreProvider = ({
  children,
  client,
}: {
  children: React.ReactNode
  client: PayVaultConstructorProps | PayVault
}) => {
  const [storeId, setStoreId] = useState<string>('');
  const vaultClient = useMemo(() => {
    setStoreId(client.storeId);
    if (client instanceof PayVault) {
      return client
    }
    return new PayVault(client)
  }, [client])



  // Fetch the store details.
  const { data, refetch } = useQuery({
    queryKey: ['storeDetails', vaultClient, storeId],
    queryFn: async () => {
      const retrieveStoreResponse = await vaultClient.getStoreInfo()
      console.log(retrieveStoreResponse)
      return retrieveStoreResponse
    },
  })

  // Mutation function for updating the store logo.
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

  // Mutation function for updating the store information.

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
        storeId: storeId,
        storeDetails: data,
        client: vaultClient,
        refresh: refetch,
        updateStoreInfo,
        updateLogo,
        updateStoreId: setStoreId,
      }}
    >
      <PayVaultCartProvider client={vaultClient}>{children}</PayVaultCartProvider>
    </StoreContext.Provider>
  )
}
