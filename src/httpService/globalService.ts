import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import interceptors from './interceptors'
import httpBaseConfig from './httpBaseConfig'

interface Result {
  status: number
  message: string | null
  errorCode: number | null
}

// 请求响应参数，包含data
interface ResultData<T = any> extends Result {
  data: T
}

interface RequestMethodType {
  url: string
  params?: object
  headers?: object
}

class RequestHttp {
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    /*
            请求拦截器
        */

    this.service.interceptors.request.use(
      // eslint-disable-next-line @typescript-eslint/no-shadow
      (config: AxiosRequestConfig) => {
        let contentType = 'application/json;charset=UTF-8'
        contentType = config.headers?.contentType || contentType
        return {
          ...config,
          headers: {
            'content-Type': contentType,
            Authorization: 'Bearer ' + localStorage.getItem('Authorization')
          }
        }
      },
      (error: AxiosError) => {
        // 请求错误
        Promise.reject(error)
      }
    )

    // 响应拦截
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        return interceptors(response)
      },
      (err) => {
        return interceptors(err.response)
      }
    )
  }

  // 常用方法封装
  get<T = ResultData>({ url, headers }: RequestMethodType): Promise<T> {
    return this.service.get(url, headers)
  }
  post<T = ResultData>({ url, params, headers }: RequestMethodType): Promise<T> {
    return this.service.post(url, params, headers)
  }
  put<T = ResultData>({ url, params, headers }: RequestMethodType): Promise<T> {
    return this.service.put(url, params, headers)
  }
  delete<T = ResultData>({ url, headers }: RequestMethodType): Promise<T> {
    return this.service.delete(url, headers)
  }
}
const requestHttp = new RequestHttp({
  baseURL: httpBaseConfig.baseURL
})

export default requestHttp
