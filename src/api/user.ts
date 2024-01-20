import { createAsyncThunk } from '@reduxjs/toolkit'
import requestHttp from '~/httpService/globalService'

type wxLoginInterfaceParameterType = {
  code: string
  phoneCode: string
  iv: string
  encryptedData: string
}

// 获取用户的Openid
export const getUserOpenId = (wxCode: string) =>
  requestHttp.get({
    url: `/login/user/wx/openId/${wxCode}`
  })

// 身份核验
// export const sendAuthentication = (data:Object) => requestHttp.post('/authentication',data)

// 微信登录
export const wxLogin = createAsyncThunk(
  'user/wxLogin',
  async (data: wxLoginInterfaceParameterType) => {
    const response = await requestHttp.post({
      url: '/login/user/wx',
      params: data
    })
    return response.data
  }
)
