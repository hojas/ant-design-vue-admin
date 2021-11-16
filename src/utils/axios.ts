import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { message } from 'ant-design-vue'

type CustomResponse<T = any> = {
  ok: boolean
} & AxiosResponse<T>

const instance = axios.create({
  baseURL: '/api/',
  timeout: 30000,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse): CustomResponse => {
    return {
      ok: true,
      ...response,
    }
  },
  (error: AxiosError) => {
    type Data = {
      message: string
    }

    const data: Data = error.response?.data as Data
    message.error(data.message || '请求失败，轻稍后再试')

    return {
      ok: false,
      ...error.response,
    }
  }
)

const proxy = {
  get<T = any>(url: string, config?: AxiosRequestConfig) {
    return instance.get<T, CustomResponse<T>>(url, config)
  },
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.post<T, CustomResponse<T>>(url, data, config)
  },
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.put<T, CustomResponse<T>>(url, data, config)
  },
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.patch<T, CustomResponse<T>>(url, data, config)
  },
  delete<T = any>(url: string, config?: AxiosRequestConfig) {
    return instance.delete<T, CustomResponse<T>>(url, config)
  },
}

export default proxy
