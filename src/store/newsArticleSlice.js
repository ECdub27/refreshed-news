import {createSlice, createAsyncThunk,createSelector} from '@reduxjs/toolkit';
import { getNewsArticle } from '../api';
import { newsapiKey } from '../api';


export const fetchNewsArticles = createAsyncThunk('fetchNewsArticles', async () => {

   const response  = await fetch('https://newsapi.org/v2/everything?q=business&q=politics&q=technology&apiKey=78df58fec805459caf086c63cbe2b3a9', {
		method: "GET",
		headers: {
			'Authorization': newsapiKey,
			'X-API-KEY': newsapiKey,
		}
	}).then((response) => {
        return response.json();
    }).then((data) => {
        return data
    })
    console.log(response)
    return response
});



const initialState = {
articles: [],
error: false,
isLoading: false,
status:  'idle',
};

export const newsArticleSlice = createSlice({
    name: 'newsArticle',
    initialState,
    reducers:{
     startGetNewsArticle(state){
        state.isLoading = true;
        state.error = false;
     },
     getNewsArticleSuccess(state,action){
        state.isLoading = false
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
           
            state.isLoading = false;
            state.articles = action.payload
            state.status = 'idle';
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

// export const selectArticles = (state) => state.newsArticles.articles;
export const getNewsArticlesStatus = (state) => state.articles.status;
export const getNewsArticleError = (state) => state.articles.error;
export const selectedTopHeadlineArticles = (state) => state.newsArticles.articles
