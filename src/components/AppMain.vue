<script>
import GenreList from './GenreList.vue';
import { store } from '../store';

export default {
    components: { GenreList },
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
        <section class="genres">
            <GenreList :genres="movies.concat(seriesTv)" />
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-content {
    background-color: $main-color;
    height: 100%;
    overflow-y: auto;
}

.genres {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5px;
    padding: 30px;
}
</style>