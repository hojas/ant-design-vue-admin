export interface Pagination<T> {
  page: number
  pageSize: number
  total: number
  results: T[]
}

export const defaultPagination: Pagination<any> = {
  page: 1,
  pageSize: 16,
  total: 0,
  results: [],
}
