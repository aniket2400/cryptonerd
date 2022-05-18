import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  // "x-rapidapi-key": "73572431e7msh76a058806121977p129a77jsncce6b904cff0",
  "x-rapidapi-key": "coinranking8b890507f17fcab9b9a3cc4702e5707d6728d7f379ce470d"
  // "x-access-token": "i-have-to-migrate-to-v2"
};

const baseUrl = "https://api.coinranking.com/v2";

const createRequest = url => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptos: builder.query({
      query: count => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query: coinId => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history/${timeperiod}`)
    }),
    getExchanges: builder.query({
      query: () => createRequest("/exchanges")
    })
  })
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery
} = cryptoApi;
