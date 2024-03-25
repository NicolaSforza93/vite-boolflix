<script>
import Categories from './Categories.vue';
import { store } from '../store';

export default {
    components: { Categories },
    data() {
        return {
            store
        }
    },
    computed: {
        movies: function () {
            return store.movies;
        },
        seriesTv: function () {
            return store.seriesTv;
        }
    }
}

</script>

<template>
    <main class="main-content">
        <Categories :results="movies.concat(seriesTv)" />
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-content {
    background-color: $app-color;
    padding: 8px 20px;
}
</style>