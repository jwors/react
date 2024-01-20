import { createSlice } from '@reduxjs/toolkit'
import { wxLogin } from '~/api/user'

interface UserSliceInitialState {
  userInfo: object
  id: number
}

const initialState: UserSliceInitialState = {
  userInfo: {},
  id: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // wxlogin
  extraReducers(builder) {
    builder.addCase(wxLogin.fulfilled, (state, action) => {
      console.log(state)
      console.log(action)
    })
    builder.addCase(wxLogin.rejected, (state, action) => {
      console.log(state)
      console.log(action)
    })
  }
})
export default userSlice.reducer
