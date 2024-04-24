<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    performSearch() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: store.API_KEY,
          query: store.searchText,
          language: 'it-IT'
        }
      }).then(res => {
        // console.log(res.data.results);
        const movies = res.data.results;
        movies.forEach(movie => {
          movie.media_type = 'movie'
        });
        // console.log(movies);
        store.movies = movies;
      }),
        axios.get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: store.API_KEY,
            query: store.searchText,
            language: 'it-IT'
          }
        }).then(res => {
          // console.log(res.data.results);
          const seriesTv = res.data.results;
          seriesTv.forEach(serieTv => {
            serieTv.media_type = 'tv'
          });
          // console.log(seriesTv);
          store.seriesTv = seriesTv;
        })
    },
    fetchTrendTvSeries() {
      axios.get('https://api.themoviedb.org/3/trending/tv/day', {
        params: {
          api_key: store.API_KEY,
          language: 'it-IT'
        }
      }).then(res => {
        // console.log(res.data.results);
        const trendSeries = res.data.results;
        // console.log(trendSeries);
        store.trendSeries = trendSeries;
      })
    },
    fetchTrendMovies() {
      axios.get('https://api.themoviedb.org/3/trending/movie/day', {
        params: {
          api_key: store.API_KEY,
          language: 'it-IT'
        }
      }).then(res => {
        // console.log(res.data.results);
        const trendMovies = res.data.results;
        // console.log(trendMovies);
        store.trendMovies = trendMovies;
      })
    },
  },
  created() {
    this.fetchTrendMovies();
    this.fetchTrendTvSeries();
  }
}


</script>

<template>
  <video controls v-if="store.movies.length === 0">
    <source src="/Y2meta.app-Rebel Moon - Parte 2_ La Sfregiatrice _ Trailer ufficiale _ Netflix Italia-(1080p).mp4"
      type="video/mp4">
    <!-- Messaggio di fallback se il browser non supporta il tag video -->
    Your browser does not support the video tag.
  </video>
  <AppHeader @search="performSearch" @serie="fetchTrendTvSeries" @film="fetchTrendMovies" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

video {
  width: 100%;
}
</style>
