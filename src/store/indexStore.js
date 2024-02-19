import {  combineReducers, configureStore } from '@reduxjs/toolkit';
import newsArticleReducer from './newsArticleSlice';
import businessNewsSliceReducer from './businessSectionSlice';
import techArticleSliceReducer from './technoloySectionSlice';
import politicsArticleSliceReducer from './politicsSectionSlice';
import { pokemonApi } from './newsApiSlice';

const rootReducer = combineReducers({
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    newsArticles: newsArticleReducer,
    businessNews: businessNewsSliceReducer,
    technologyNews: techArticleSliceReducer,
    politicsNews: politicsArticleSliceReducer,
    
})


const store = configureStore({
reducer: {
    newsArticles: newsArticleReducer,
    businessNews: businessNewsSliceReducer,
    technologyNews: techArticleSliceReducer,
    politicsNews: politicsArticleSliceReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
   
},
middleware: (getDefaultMiddleware) => 
getDefaultMiddleware().concat(pokemonApi.middleware),
})


export default store;
