import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Определение начального состояния
const initialState = {
  categories: [],
  categoryCurrent: 1,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Асинхронная функция для загрузки категорий
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await api.get('/categories/all'); // Замените на ваш URL

  if (response.status !== 200) {
    throw new Error('Ошибка при загрузке категорий');
  }
  return await response.data;
});

// Создание slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeCurrentCategory:(state,action)=>{
        state.categoryCurrent = action.payload
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(category => category.id !== action.payload);
    },
    updateCategory: (state, action) => {
      const index = state.categories.findIndex(category => category.id === action.payload.id);
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Добавляем загруженные категории в состояние
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Экспортируем действия
export const { addCategory, removeCategory, updateCategory , changeCurrentCategory} = categoriesSlice.actions;

// Экспортируем редьюсер
export default categoriesSlice.reducer;