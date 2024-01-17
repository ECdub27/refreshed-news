import {configureStore} from '@reduxjs/toolkit';
import newsArticleReducer from './newsArticleSlice';


const store = configureStore({
reducer:{
    newsArticles: newsArticleReducer,
}
});

export default store;