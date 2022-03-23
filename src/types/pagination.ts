export interface Pagination<T> {
  page: number
  pageSize: number
  total: number
  results: T[]
}

export interface PaginationModel<T> {
  page: number
  page_size: number
  total: number
  results: T[]
}
