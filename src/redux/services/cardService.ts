import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export interface ICard {
    id: string,
    isBuy: boolean,
    type: "quiz" | "course",
    src: string,
    title: string,
    exp: number,
    questionCount: number | null,
    price: number | null
}

export const cardAPI = createApi({
    reducerPath: 'cardAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api'}),
    tagTypes: ['Card'],
    endpoints: (build) => ({
        fetchAllCards: build.query<ICard[], void>({
            query: () => ({
                url: '/quiz'
            }),
            providesTags: result => ['Card']
        }),
        findOneCard: build.query<ICard, string>({
            query: (id) => `card/${id}`,
        }),
        createCard: build.mutation<any, any>({
            query: (card) => ({
                url: '/card',
                method: 'POST',
                body: card
            }),
            invalidatesTags: ['Card']
        })
    })
})