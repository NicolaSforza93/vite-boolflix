import { reactive } from "vue";

export const store = reactive({
    API_KEY: 'ad1e386e3bd4db2a19cb597905b6ceeb',
    searchText: '',
    movies: [],
    seriesTv: [],
    trendMovies: [],
    trendSeries: [],
    flags: ['de', 'en', 'es', 'fr', 'it', 'ja'],
});