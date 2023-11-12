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
          query: store.searchText
        }
      }).then(res => {
        // console.log(res.data.results);
        const movies = res.data.results;
        console.log(movies);
        store.movies = movies;
      }),
        axios.get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: store.API_KEY,
            query: store.searchText
          }
        }).then(res => {
          // console.log(res.data.results);
          const seriesTv = res.data.results;
          console.log(seriesTv);
          store.seriesTv = seriesTv;
        })
    }
  },
}


</script>

<template>
  <AppHeader @search="performSearch" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
</style>
