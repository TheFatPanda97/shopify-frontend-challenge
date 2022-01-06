/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { RootState } from './index';

export interface Post {
  title: string;
  explanation: string;
  date: string;
  image_url: string;
  liked: boolean;
}

interface PostState {
  posts: Record<string, Post>;
}

interface APIPostState {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  copyright?: string;
}

/**
 * Fetch <numPosts> post from the NASA API
 * @param numPosts number of posts to fetch, defaults to 30
 * @returns a object with the posts keyed by their title
 */
export const fetchPosts = createAsyncThunk<
  Record<string, Post>,
  number | void,
  {
    state: RootState;
  }
>('posts/fetchPosts', async (numPosts = 30) => {
  try {
    const response = await axios(
      `https://api.nasa.gov/planetary/apod?api_key=6XZ7Qttr8Fknpti97AFQqAPqds4klkjeP6aRQisQ&count=${numPosts}`,
    );
    const { data }: { data: APIPostState[] } = response;
    return data.reduce<Record<string, Post>>(
      // eslint-disable-next-line object-curly-newline
      (accPosts, { title, url: image_url, explanation, date }) => ({
        ...accPosts,
        [title]: {
          title,
          explanation,
          image_url,
          date,
          liked: false,
        },
      }),
      {},
    );
  } catch (error) {
    console.error(error);
    return {};
  }
});

const initialState: PostState = {
  posts: {},
};

export const postSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // load some events
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postSlice.reducer;
