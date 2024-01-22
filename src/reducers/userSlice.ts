import { createSlice } from '@reduxjs/toolkit'
import { wxLogin } from '~/api/user'

interface UserSliceInitialState {
  userInfo: object
}

const initialState: UserSliceInitialState = {
  userInfo: {
    name: 'jack',
    age: 19,
    id: 0
  }
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
