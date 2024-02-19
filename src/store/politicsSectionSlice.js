import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newsapiKey } from "../api";




export const fetchPoliticsArticles = createAsyncThunk('Politics Articles', async (sources) =>{
    const response =  await fetch('https://newsapi.org/v2/top-headlines?q=politics&apiKey=78df58fec805459caf086c63cbe2b3a9',{
   method: 'GET',
   headers:{ 
    'Authorization': newsapiKey,
			'X-API-KEY': newsapiKey,

   }
    }).then((response) => { 
        return response.json();
    }).then((data) => {
        return data
    })
   console.log(response);
    return response
    

})

const initialState = {
    politicsArticles: [],
    isLoading: false,
    status: 'idle',
    error: false


};


export const politicsArticleSlice = createSlice({
    name:'politics_News',
initialState,
 reducers: {
startPoliticsArticles(state){
    state.isLoading = true
    state.error = false
},
getPoliticsArticles(state,action){
    state.isLoading = false
    state.politicsArticles = action.payload;

},
failPoliticsArticles(state){
    state.isLoading  = false
    state.error =  true;
}
 },
 extraReducers(builder){
    builder.addCase(fetchPoliticsArticles.pending,(state) =>{
        state.isLoading = true;
        state.error = false
        state.status = 'loading'
    }).addCase(fetchPoliticsArticles.fulfilled, (state,action) =>{
        state.isLoading = false;
        state.politicsArticles = action.payload;
        state.status = 'idle';
    }).addCase(fetchPoliticsArticles.rejected, (state) =>{
     state.action.error = true;
     state.status = 'rejected'
    })
 }
});

export const {startPoliticsArticles, getPoliticsArticles,failPoliticsArticles} = politicsArticleSlice.actions;
export default politicsArticleSlice.reducer;

// selector variables
export const selectPollyArticles = (state) => state.politicsNews.politicsArticles

export const getPoliticsArticlesStatus = (state) => state.politicsNews.status;
export const getPoliticsArticlesError = (state) => state.politicsNews.rejected;