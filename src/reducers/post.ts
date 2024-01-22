import { createSelector, createSlice } from '@reduxjs/toolkit'
interface PostType {
  id: number
  address: string
  name: string
}
interface PostSliceType {
  list: PostType[]
}

export const selectAllPosts = (state) => state.posts.list
export const selectPostById = (state, id) =>
  state.post.list.find((post: PostType) => post.id === id)

export const selectPostsByUser = createSelector([selectAllPosts, (state, id) => id], (posts, id) =>
  posts.fiter((post: PostType) => post.id === id)
)
const initialState: PostSliceType = {
  list: [
    {
      id: 0,
      name: 'jack',
      address: '下四分'
    }
  ]
}

export const userSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})
