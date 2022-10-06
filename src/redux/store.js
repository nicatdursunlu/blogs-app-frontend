import { configureStore } from '@reduxjs/toolkit'

import userReducer from './features/usersSlice'
import blogReducer from './features/blogsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogReducer,
  },
})
