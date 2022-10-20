import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userApi from '../api/userApi'

export const getUsers = createAsyncThunk('user/getUsers', async () => {
  const res = await userApi.getUsers()
  return res
})

const userStore = createSlice({
  name: 'user',
  initialState: {
    listUsers: [],
    listUsersLoading: true,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.listUsers = action.payload.data
      state.listUsersLoading = false
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.listUsersLoading = false
    })
  },
})

const { reducer } = userStore

export default reducer
