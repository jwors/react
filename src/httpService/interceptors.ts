import type { AxiosResponse } from 'axios'
import HTTP_STATUS from './httpCodes'

const customInterceptor = (chain: AxiosResponse) => {
  // const requestParams = chain.requestParams
  const { status, data } = chain
  // Taro.showLoading({
  //   title: '加载中',
  // })
  console.log(data)

  if (status === 200) {
    if (data?.status === HTTP_STATUS.NOT_FOUND) {
      return Promise.reject({ desc: '请求资源不存在' })
    } else if (data.status === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject({ desc: '服务端出现了问题' })
    } else if (data.status === HTTP_STATUS.FORBIDDEN) {
      localStorage.setItem('Authorization', '')
      // TODO 根据自身业务修改
      return Promise.reject({ desc: '没有权限访问' })
    } else if (data.status === HTTP_STATUS.UNAUTHORIZED) {
      return Promise.reject({ desc: '需要鉴权' })
    } else if (data.status === HTTP_STATUS.INTERNAL_SERVER_ERROR) {
      return Promise.reject({ desc: '服务器错误' })
    } else if (data.status === HTTP_STATUS.OK) {
      if (data.status === 200) {
        return data
      } else {
        return Promise.reject({ desc: data.message })
      }
    }
  } else {
    return Promise.reject(data)
  }
}

export default customInterceptor
