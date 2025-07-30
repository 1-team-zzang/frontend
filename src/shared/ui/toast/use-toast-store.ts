import { create } from 'zustand'

type ToastType = 'success' | 'error'

interface ToastMessage {
  id: string
  type: ToastType
  message: string
}

interface ToastStore {
  toasts: ToastMessage[]
  addToast: (toast: Omit<ToastMessage, 'id'>) => void
  removeToast: (id: string) => void
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: ({ type, message }) =>
    set((state) => ({
      toasts: [...state.toasts, { id: crypto.randomUUID(), type, message }],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}))
