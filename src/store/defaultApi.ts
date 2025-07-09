import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const defaultApi = createApi({
  reducerPath: "defaultApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getDefaultValue: builder.query<string, void>({
      query: () => "default-value",
    }),
  }),
});

export const { useGetDefaultValueQuery } = defaultApi;
