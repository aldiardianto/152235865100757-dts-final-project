import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://valorant-api.com/v1"

export const valorantApi = createApi({
  reducerPath: "valorantApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    agents: build.query({
      query: () => `/agents?isPlayableCharacter=true`,
    }),
    agentsById: build.query({
      query: (id) => `/agents/${id}`,
    }),
    weapons: build.query({
      query: () => `/weapons`,
    }),
    weaponsById: build.query({
      query: (id) => `/weapons/${id}`,
    }),
    weaponsSkins: build.query({
      query: () => `/weapons/skins`,
    }),
    weaponsSkinsById: build.query({
      query: (id) => `/weapons/skins/${id}`,
    }),
    
  }),
});

export const {
    useAgentsQuery,
    useAgentsByIdQuery,
    useWeaponsByIdQuery,
    useWeaponsQuery,
    useWeaponsSkinsQuery,
    useWeaponsSkinsByIdQuery

} = valorantApi;