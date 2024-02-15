import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newsapiKey } from "../api";



export const fetchTechArticles = createAsyncThunk('TechArticles', async (sources) =>{
   
   const response  =  await fetch('https://newsapi.org/v2/top-headlines?sources=technology&apiKey=78df58fec805459caf086c63cbe2b3a9', {
    method: 'GET',
    headers: {
        "X-API-KEY": newsapiKey,
        "Authorization": newsapiKey
    }
   }).then((response) => {
    return response.json()
   }).then((data) =>{
    return data.sources;
   })
   console.log(response);
   return response;
   
});

const initialState = {
    techArticles: [],
    isLoading: false,
    status: 'idle',
    error: false


};


export const techArticleSlice = createSlice({
    name: 'Tech Article',
initialState,
 reducers: {
startTechArticles(state){
    state.isLoading = true
    state.error = false
},
getTechArticles(state,action){
    state.techArticles = action.payload.techArticles;
    state.isLoading = false;
    state.status ='Success'
},
failTechArticles(state){
    state.isLoading  = false
    state.error =  true;
}
 },
 extraReducers(builder){
    builder.addCase(fetchTechArticles.pending,(state) =>{
        state.isLoading = true;
        state.error = false
        state.status = 'loading'
    }).addCase(fetchTechArticles.fulfilled, (state,action) =>{
        state.isLoading = false;
        state.techArticles = action.payload;
        state.status = 'idle';
    }).addCase(fetchTechArticles.rejected, (state,action) =>{
     state.error = action.error.message;
     state.status = 'rejected'
    })
 }
});

export const {startTechArticles, getTechArticles, failTechArticles} = techArticleSlice.actions;
export default techArticleSlice.reducer;



// selector vars
export const selectTechArticles = (state) => state.technologyNews.techArticles;
export const getTechArticlesStatus = (state) =>  state.technologyNews.status;
export const getTechArticlesError = (state) => state.technologyNews.error;