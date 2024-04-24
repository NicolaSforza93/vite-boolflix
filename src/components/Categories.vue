<script>
import AppCard from './AppCard.vue';
import { store } from '../store';
import AppCarousel from './AppCarousel.vue';
import AppInfo from './AppInfo.vue';
import AppModal from './AppModal.vue';

export default {
    components: {
        AppCard,
        AppCarousel,
        AppInfo,
        AppModal
    },
    data() {
        return {
            store,
            selectedElement: {},
            selectedResult: {},
            show: false,
            open: false,
        }
    },
    props: {
        results: {
            type: Array,
            required: true
        }
    },
    methods: {
        // showFocus(element) {
        //     this.selectedElement = element;
        //     this.show = true;
        // },
        // showModal(result) {
        //     console.log('open');
        //     this.selectedResult = result;
        //     this.open = true;
        // },
        // closeModal() {
        //     console.log('close');
        //     this.open = false;
        //     this.selectedResult = {};
        // }
    },
}

</script>

<template>
    <section v-if="results.length > 0">
        <div class="container-fluid search-container">
            <p class="text-white fs-5"><span class="text-secondary">Risultati per:</span> {{ store.searchText }}</p>
            <div class="search-results">
                <div v-for="(result, index) in results" :key="index">
                    <AppCard :item="result" data-bs-toggle="modal" :data-bs-target="'#modal-' + index" />
                    <AppModal :item="result" :index="index" />
                </div>
            </div>
        </div>
    </section>

    <section v-else>
        <div class="container-fluid">
            <div class="focus-info d-flex">
                <AppInfo />
            </div>
        </div>
        <div class="container-fluid mb-5">
            <h1 class="title-section">Film di tendenza</h1>
            <div class="trend-films position-relative">
                <AppCarousel :item="store.trendMovies" modalSection="movies-" />
            </div>
        </div>

        <div class="container-fluid mb-5">
            <h1 class="title-section">Serie di tendenza</h1>
            <div class="trend-series position-relative">
                <AppCarousel :item="store.trendSeries" modalSection="series-" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.focus-info {
    color: white;
    margin-bottom: 10px;
    // height: 780px;

    .title {
        font-size: 30px;
    }

    .btn {
        border-radius: 3px;
    }
}

.search-results {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
    grid-row-gap: 70px;
}

.search-container {
    margin-top: 80px;
}

.title-section {
    text-transform: uppercase;
    color: white;
    font-size: 20px;
}
</style>