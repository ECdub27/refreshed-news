import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getNewsArticle } from '../api';



export const fetchNewsArticles = createAsyncThunk('fetchNewsArticles', async () => {

const res = await getNewsArticle('https://extract-news.p.rapidapi.com/v0/article?url=https%3A%2F%2Fwww.nbcnews.com%2Fnbcblk')


 
});



const initialState = {
articles: [],
error: false,
isLoading: false,
status:  'idle',
};

const newsArticleSlice = createSlice({
    name: 'newsArticle',
    initialState,
    reducers:{
     startGetNewsArticle(state){
        state.isLoading = true;
        state.error = false;
     },
     getNewsArticleSuccess(state,action){
        state.isLoading = false;
        state.articles = action.payload.articles;
     },
     getNewsArticleFailure(state){
        state.isLoading = false; 
        state.error = true; 
     }, 
     
     extraReducers(builder){
        builder.addCase(fetchNewsArticles.pending,(state) =>{
        state.isLoading = 'loading'
        }).addCase(fetchNewsArticles.fulfilled,(state,action) =>{
            state.status ='success';
            state.article.push(action.payload)
            // state.article = action.payload
        }).addCase(fetchNewsArticles.rejected, (state,action) =>{
            state.error = action.error.message;     
            state.status = 'failed';
        })
     }
    }
}); 


export const {startGetNewsArticle, getNewsArticleSuccess, getNewsArticleFailure} = newsArticleSlice.actions;
export default newsArticleSlice.reducer;

export const selectArticles = (state) => state.newsArticles.articles;
export const getNewsArticlesStatus = (state) => state.articles.status;
export const getNewsArticleError = (state) => state.articles.error;

if(selectArticles != null){
   console.log(selectArticles);
}