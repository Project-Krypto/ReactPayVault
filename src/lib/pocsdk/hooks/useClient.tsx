import { useStore } from './useStore'

export const useClient = () => {
  const store = useStore()

  return store.client
}
