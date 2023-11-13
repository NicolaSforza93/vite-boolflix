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
        <div v-for="(genre, index) in genres" :key="index" v-show="genres.length > 0" class="card">
            <AppCard :item="genre" />
        </div>
    </section>

    <section class="trend">
        <div v-for="(element, index) in store.trend" :key="index" v-show="!genres.length" class="card">
            <AppCard :item="element" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.card {
    background-color: white;
}

.genres-searched,
.trend {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5px;
}
</style>