import axios, { AxiosError, AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'

declare module 'axios' {
  export interface AxiosRequestConfig {
    showError: boolean
  }

  export interface AxiosResponse {
    ok: boolean
  }

  export interface AxiosError {
    ok: boolean
  }
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  timeout: 3000,
  showError: true,
})

instance.interceptors.response.use(
  (response: AxiosResponse) => ({ ...response, ok: true }),
  async (error: AxiosError) => {
    type Data = {
      message: string
    }

    const {
      response = {
        ok: false,
        data: {
          message: '请求失败，请稍后再试',
        },
      },
    } = error

    if (error.config.showError) {
      const data: Data = response.data
      await message.error(data.message)
    }

    return response
  }
)

export default instance
