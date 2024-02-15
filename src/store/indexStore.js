import {  configureStore } from '@reduxjs/toolkit';
import newsArticleReducer from './newsArticleSlice';
import businessNewsSliceReducer from './businessSectionSlice';
import techArticleSliceReducer from './technoloySectionSlice';
import politicsArticleSliceReducer from './politicsSectionSlice';
const store = configureStore({
reducer:{
    newsArticles: newsArticleReducer,
    businessNews: businessNewsSliceReducer,
    technologyNews: techArticleSliceReducer,
    politicsNews: politicsArticleSliceReducer
},

})

export default store;
