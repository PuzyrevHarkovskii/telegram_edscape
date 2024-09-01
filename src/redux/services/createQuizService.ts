import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const createQuizAPI = createApi({
    reducerPath: 'createQuizAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/card/quiz'}),
    tagTypes: ['Quiz'],
    endpoints: (build) => ({
        createQuiz: build.mutation({
            query: (data) => ({
                url: '',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Quiz']
        }),
        updateQuiz: build.mutation<any, any>({
            query: (data) => ({
                url: '/update',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Quiz']
        }),
        removeStep: build.mutation<any, any>({
            query: (id) => ({
                url: `/step/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Quiz']
        }),
        findOneCard: build.query<any, string>({
            query: (id) => `card/${id}`,
        }),
        fetchAllCards: build.query<any[], void>({
            query: () => ({
                url: ''
            }),
            providesTags: result => ['Quiz']
        })
    })
})