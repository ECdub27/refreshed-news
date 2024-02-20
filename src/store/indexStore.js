import {  combineReducers, configureStore } from '@reduxjs/toolkit';
import newsArticleReducer from './newsArticleSlice';
import businessNewsSliceReducer from './businessSectionSlice';
import techArticleSliceReducer from './technoloySectionSlice';
import politicsArticleSliceReducer from './politicsSectionSlice';
import {  apiSlice, pokemonApi } from './newsApiSlice';




const store = configureStore({
reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    newsArticles: newsArticleReducer,
    businessNews: businessNewsSliceReducer,
    technologyNews: techArticleSliceReducer,
    politicsNews: politicsArticleSliceReducer,
    
},
middleware: (getDefaultMiddleware) => 
getDefaultMiddleware().concat(apiSlice.middleware)
})


export default store;
