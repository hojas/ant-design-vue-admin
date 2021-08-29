import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

type CustomResponse<T = any> = {
  ok: boolean
  message?: string
} & AxiosResponse<T>

const instance = axios.create({
  baseURL: '/api/',
  timeout: 30000,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.timeout === 30000
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response: AxiosResponse): CustomResponse => {
    return {
      ok: true,
      ...response,
    }
  },
  (error: AxiosError) => {
    return {
      ok: false,
      message: error.response?.data.message || '请求失败，轻稍后再试',
      ...error.response,
    }
  },
)

const proxy = {
  get<T = any>(url: string, config?: AxiosRequestConfig) {
    return instance.get<T, CustomResponse<T>>(url, config)
  },
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.post<T, CustomResponse<T>>(url, data, config)
  },
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.post<T, CustomResponse<T>>(url, data, config)
  },
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.post<T, CustomResponse<T>>(url, data, config)
  },
  delete<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.post<T, CustomResponse<T>>(url, data, config)
  },
}

export default proxy
