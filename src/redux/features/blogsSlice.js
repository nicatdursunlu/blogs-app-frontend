import axios from 'lib/axios'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  return axios.get('/blogs').then((response) => response.data)
})

const initialState = {
  list: [],
  loading: false,
  error: null,
}

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBlogs.pending]: (state) => {
      state.loading = true
    },
    [fetchBlogs.fulfilled]: (state, action) => {
      state.list = action.payload
      state.loading = false
    },
    [fetchBlogs.rejected]: (state, action) => {
      state.list = []
      state.loading = false
      state.error = action.error
    },
  },
})

export default blogsSlice.reducer
