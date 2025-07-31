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

export const useToastStore = create<ToastStore>((set, get) => ({
  toasts: [],
  addToast: ({ type, message }) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
    const newToast = { id, type, message }

    set((state) => {
      const nextToasts = [...state.toasts, newToast]
      const sliced = nextToasts.slice(-3) //개수제한
      return { toasts: sliced }
    })

    setTimeout(() => {
      get().removeToast(id)
    }, 2000)
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}))
