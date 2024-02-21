import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';


// pokeapi.co/api/v2/'
// `pokemon/${name}`
// business : https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=78df58fec805459caf086c63cbe2b3a9`
// all articles: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=78df58fec805459caf086c63cbe2b3a9
// tech articles: find one that works on postman
// politics: https://newsapi.org/v2/top-headlines?q=politics&apiKey=78df58fec805459caf086c63cbe2b3a9'

export const apiSlice = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://'}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokeapi.co/api/v2/pokemon/${name}`
        }),
        GetBusinessArticles: builder.query({
            query: () => 'newsapi.org/v2/top-headlines/sources?category=business&apiKey=78df58fec805459caf086c63cbe2b3a9'
        }),
        GetAllArticles: builder.query({
            query: () => 'newsapi.org/v2/top-headlines?country=us&apiKey=78df58fec805459caf086c63cbe2b3a9'
        }),
        GetPoliticsArticles: builder.query({
            query: () => 'newsapi.org/v2/top-headlines?q=politics&pageSize=20&apiKey=78df58fec805459caf086c63cbe2b3a9'
        }),
        GetTechnologyArticles: builder.query({
            query: () => 'newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&pageSize=20&apiKey=78df58fec805459caf086c63cbe2b3a9'
        })
        })
    })



export const { useGetPokemonByNameQuery, useGetBusinessArticlesQuery, useGetAllArticlesQuery,useGetPoliticsArticlesQuery, useGetTechnologyArticlesQuery } = apiSlice


