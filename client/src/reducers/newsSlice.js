import {
  createSlice,
  createSelector,
  PayloadAction,
  createAsyncThunk,
  nanoid,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  news: [],
  status: "idle",
  error: null,
};

export const fetchNews = createAsyncThunk("fetch/fetchNews", async () => {
  try {
    const response = await axios.get("https://localhost:7072/api/news");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addNewNews = createAsyncThunk("post/addNewNews", async (state) => {
  try {
    const response = await axios.post("https://localhost:7072/api/news", {
      ...state,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  redusers: {
    newsUpdated(state, action) {
      const { id, title, body, imageUrl } = action.payload;
      const existingNews = state.news.find((news) => news.id === id);
      if (existingNews) {
        existingNews.title = title;
        existingNews.body = body;
        existingNews.imageUrl = imageUrl;
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchNews.pending, (state) => {
        state = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = state.news.concat(action.payload);
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewNews.fulfilled, (state, action) => {
        state.news.push(action.payload);
      });
  },
});

export const { newsUpdated } = newsSlice.actions;
export default newsSlice.reducer;

export const selectAllNews = (state) => state.news.news;

export const selectNewsById = (state, newsId) =>
  state.news.news.find((news) => news.id === newsId);
