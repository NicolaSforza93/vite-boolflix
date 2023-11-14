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
        results: {
            type: Array,
            required: true
        }
    }
}

</script>

<template>
    <section v-show="results.length > 0">
        <p>Risultati per: "{{ store.searchText }}"</p>
        <div class="search-results">
            <div v-for="(result, index) in results" :key="index" class="card">
                <AppCard :item="result" />
            </div>
        </div>
    </section>

    <section v-if="!results.length">
        <h1 class="title-section">Di tendenza</h1>
        <div class="trend">
            <div v-for="(element, index) in store.trend" :key="index" class="card">
                <AppCard :item="element" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section>p {
    color: white;
    margin-bottom: 10px;
}

.title-section {
    text-transform: uppercase;
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
}

.card {
    background-color: white;
    position: relative;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        transition: all 0.3s;
        z-index: 999;
        border: 2px solid white;
    }
}

.search-results,
.trend {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
}
</style>