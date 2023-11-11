import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import { fetchPosts } from "@/api";

import { Post, BlogState } from "@/types";

const initialState: BlogState = { posts: [], status: "idle", error: null };

export const fetchPostsThunk = createAsyncThunk("blog/fetchPosts", fetchPosts);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchPostsThunk.pending, (state: BlogState) => {
        state.status = "loading";
      })
      .addCase(
        fetchPostsThunk.fulfilled,
        (state: BlogState, action: PayloadAction<Post[]>) => {
          state.status = "succeeded";
          state.posts = state.posts.concat(action.payload);
        }
      )
      .addCase(fetchPostsThunk.rejected, (state: BlogState, action: any) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default blogSlice.reducer;
