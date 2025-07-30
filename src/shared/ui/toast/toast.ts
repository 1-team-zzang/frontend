import { useToastStore } from './use-toast-store'

export const toast = {
  success(message: string) {
    useToastStore.getState().addToast({ type: 'success', message })
  },
  error(message: string) {
    useToastStore.getState().addToast({ type: 'error', message })
  },
}
