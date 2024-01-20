type HttpBaseConfigType = {
  baseURL: string
}
const httpBaseConfig = (): HttpBaseConfigType => {
  const config = {
    baseURL: ''
  }
  if (process.env.NODE_ENV === 'development') {
    //开发环境 - 根据请求不同返回不同的BASE_URL
    config.baseURL = 'api'
  } else {
    // 生产环境
    config.baseURL = 'https://api.17donor.com/subsidy'
  }

  return config
}

export default httpBaseConfig()
