import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {getBusinessNews} from '../api';
import { newsapiKey } from "../api";


export const fetchBusinessNews = createAsyncThunk('Business News', async () =>{

const response =  await getBusinessNews(`https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=${newsapiKey}`)
console.log(response);
return response.resources[1];
});




const initialState = {
    articles: [],
    error: false,
    isLoading: false,
    status: 'idle',
};


export const businessNewsSlice = createSlice({
 name: 'businessNews',
 initialState,
 reducers:{
startGetBusinessNews(state){
state.isLoading = true;
state.error = false;
},
getBusinessNewsSuccess(state,action){
    state.isLoading = false;
    state.articles = action.payload.articles;
},
getBusinessNewsFailure(state){
    state.isLoading = false;
    state.error = true;
}
 },
 extraReducers(builder){
 builder.addCase(fetchBusinessNews.pending,(state) =>{
  state.isLoading = 'loading';
 }).addCase(fetchBusinessNews.fulfilled, (state,action) =>{
    state.isLoading = false;
    state.articles.push(action.payload);
 }).addCase(fetchBusinessNews.rejected, (state,action) =>{
    state.error = action.error.message;     
            state.status = 'failed';
 })
 }
});

export const {startGetBusinessNews, getBusinessNewsSuccess, getBusinessNewsFailure} = businessNewsSlice.actions
export default businessNewsSlice.reducer;

 export const selectBusinessNews = (state) => state.businessNews.articles;
 export const getBusinessNewsStatus = (state) => state.businessNews.status;
 export const getBusinessNewsError =(state) => state.businessNews.error;