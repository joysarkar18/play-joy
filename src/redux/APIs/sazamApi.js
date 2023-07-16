
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const musicApi = createApi({
    reducerPath: 'musicApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key' , '0d81c78e08msh93b3de6c42f1f8cp14ff42jsn8fa084e3057b');
        return headers;
    }
    }

),
    
    endpoints: (builder) => ({
      getMusicList: builder.query({
        query: (name) => `/charts/track?locale=en-US&pageSize=20&startFrom=0`,
      }),
    }),
});

export  const {useGetMusicListQuery, } = musicApi;