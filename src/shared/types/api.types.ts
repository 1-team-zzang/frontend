export type PaginatedResponse<T, K extends string> = {
  page: number
  totalPages: number
} & Record<K, T[]>
