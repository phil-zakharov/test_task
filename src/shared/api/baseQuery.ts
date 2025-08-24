import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_URL } from './constants';

export const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL })