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
    props: {
        genres: {
            type: Array,
            required: true
        }
    }
}

</script>

<template>
    <section class="genres-searched">
        <p>Risultati per: {{ store.searchText }}</p>
        <div v-for="(genre, index) in genres" :key="index" class="card">
            <AppCard :item="genre" />
        </div>
    </section>

    <section class="trend" v-if="!genres.length">
        <h1 class="title">Di tendenza</h1>
        <div class="trend-item">
            <div v-for="(element, index) in store.trend" :key="index" class="card">
                <AppCard :item="element" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.card {
    background-color: white;
}

.genres-searched,
.trend-item {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5px;
}
</style>