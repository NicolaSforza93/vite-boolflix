<script>
import AppCard from './AppCard.vue';
import { store } from '../store';

export default {
    components: { AppCard },
    data() {
        return {
            store
        }
    },
    computed: {
        movies: function () {
            return store.movies;
        }
    }
}

</script>

<template>
    <main class="main-content">
        <section class="movies-section">
            <div v-for="(movie, id) in movies" :key="id" class="card">
                <AppCard :item="movie" />
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-content {
    background-color: $main-color;
    height: 100%;
}

.movies-section {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 20px;
}

.card {
    background-color: white;
    width: 180px;
    aspect-ratio: 1;
}
</style>