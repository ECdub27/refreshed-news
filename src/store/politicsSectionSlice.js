import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newsapiKey } from "../api";




export const fetchPoliticsArticles = createAsyncThunk('Politics Articles', async (sources) =>{
    const response =  await fetch('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=78df58fec805459caf086c63cbe2b3a9',{
   method: 'GET',
   headers:{ 
    'Authorization': newsapiKey,
			'X-API-KEY': newsapiKey,

   }
    }).then((response) => { 
        return response.json();
    }).then((data) => {
        return data.sources
    })
   console.log(response);
    return response;
    

})

const initialState = {
    politicsArticles: [],
    isLoading: false,
    status: 'idle',
    error: false


};


export const politicsArticleSlice = createSlice({
    name: 'Politics Article',
initialState,
 reducers: {
startPoliticsArticles(state){
    state.isLoading = true
    state.error = false
},
getPoliticsArticles(state,action){
    state.articles = action.payload.articles;
    state.isLoading = false;
    state.status ='Success'
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
        state.action = action.payload;
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