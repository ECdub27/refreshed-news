import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getNewsArticle } from '../api';



export const fetchNewsArticles = createAsyncThunk('newsArticles/fetchNewsArticles', 
async (article) =>{
 const response = await getNewsArticle(article);
 return response.data;


 
},

);



const initialState = {
articles: [],
error: null,
isLoading: false,
status:  'idle',
};

const newsArticleSlice = createSlice({
    name: ' News Article',
    initialState,
    reducers:{
     startGetNewsArticle(state){
        state.isLoading = true;
        state.error = false;
     },
     getNewsArticleSuccess(state,action){
        state.isLoading = false;
        state.articles = action.payload;
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
            state.article = action.payload;
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