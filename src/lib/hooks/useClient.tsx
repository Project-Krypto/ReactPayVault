import { useStore } from './useStore'

/** Hook to retrieve the store client */
export const useClient = () => {
  const store = useStore()

  return store.client
}
