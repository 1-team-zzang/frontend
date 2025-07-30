import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useEffect, type ReactNode } from 'react'

import channelTalk from '@/shared/lib/channel-talk'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      throwOnError: true,
    },
    mutations: {
      retry: 0,
      throwOnError: true,
    },
  },
})

export default function QueryProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    channelTalk.loadScript()

    channelTalk.boot({
      pluginKey: import.meta.env.VITE_CHANNEL_TALK_PLUGIN_KEY, // fill your plugin key
    })
  })
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  )
}
