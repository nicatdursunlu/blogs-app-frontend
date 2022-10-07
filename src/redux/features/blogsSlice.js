import axios from 'lib/axios'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (params) => {
    return axios.get('/blogs', { params }).then((response) => response.data)
  }
)

const initialState = {
  list: [],
  loading: false,
  total: 0,
  currentPage: 1,
  error: null,
}

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    toggleBlogLike(state, action) {
      const { userId, blogId } = action.payload
      const blog = state.list.find((blog) => blog._id === blogId)
      if (blog.likes.includes(userId)) {
        blog.likes = blog.likes.filter((uid) => uid !== userId)
      } else {
        blog.likes.push(userId)
      }
    },
  },
  extraReducers: {
    [fetchBlogs.pending]: (state) => {
      state.loading = true
    },
    [fetchBlogs.fulfilled]: (state, action) => {
      state.list = action.payload.list
      state.total = action.payload.total
      state.loading = false
    },
    [fetchBlogs.rejected]: (state, action) => {
      state.list = []
      state.loading = false
      state.error = action.error
    },
  },
})

export const { setCurrentPage, toggleBlogLike } = blogsSlice.actions

export default blogsSlice.reducer
