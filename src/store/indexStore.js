import {applyMiddleware,  configureStore } from '@reduxjs/toolkit';
import newsArticleReducer from './newsArticleSlice';
import businessNewsSliceReducer from './businessSectionSlice';

const store = configureStore({
reducer:{
    newsArticles: newsArticleReducer,
    businessNews: businessNewsSliceReducer,
}

})

export default store;
