<script>
import AppCard from './AppCard.vue';
import { store } from '../store';
import AppCarousel from './AppCarousel.vue';
import AppInfo from './AppInfo.vue';

export default {
    components: {
        AppCard,
        AppCarousel,
        AppInfo,
    },
    data() {
        return {
            store,
            selectedElement: {},
            show: false,
            flags: ['de', 'en', 'es', 'fr', 'it', 'ja'],
        }
    },
    props: {
        results: {
            type: Array,
            required: true
        }
    },
    methods: {
        showFocus(element) {
            this.selectedElement = element;
            this.show = true;
        },
    },
    computed: {
        // vote() {
        //     return Math.ceil(this.item.vote_average / 2);
        // }
    },
}

</script>

<template>
    <section v-if="results.length > 0">
        <div class="container-fluid">
            <p class="text-white">Risultati per: "{{ store.searchText }}"</p>
            <div class="search-results">
                <div v-for="(result, index) in results" :key="index">
                    <AppCard :item="result">
                        <div class="card_info">
                            <h1 class="fs-6 mb-0">{{ result.title || result.name }}</h1>
                            <h6 class="mb-0"
                                v-show="result.title !== result.original_title || result.name !== result.original_name">
                                <strong>Titolo originale:</strong> {{ result.original_title || result.original_name }}
                            </h6>
                            <div class="language">
                                <p class="mb-0"><strong>Lingua:</strong></p>
                                <span v-if="!flags.includes(result.original_language)">{{ result.original_language
                                    }}</span>
                                <div class="flags-image" v-else>
                                    <img :src="`/flags/${result.original_language}.png`" alt="">
                                </div>
                            </div>
                            <!-- <div class="vote">
                                <p class="mb-0"><strong>Voto:</strong></p>
                                <div class="stars">
                                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote" :key="n"
                                        class="stars_full" />
                                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in 5 - vote" :key="n"
                                        class="stars_empty" />
                                </div>
                            </div> -->
                            <p class="overview">{{ result.overview }}</p>
                        </div>
                    </AppCard>
                </div>
            </div>
        </div>
    </section>

    <section v-else>
        <div class="container-fluid">
            <div v-if="show" class="focus-info mb-5">
                <div class="col-6 text-white">
                    <AppInfo :item="selectedElement" />
                </div>
            </div>
        </div>
        <div class="container-fluid mb-5">
            <h1 class="title-section">Film di tendenza</h1>
            <div class="trend-films position-relative">
                <AppCarousel :item="store.trendMovies" @show="showFocus" />
            </div>
        </div>

        <div class="container-fluid">
            <h1 class="title-section">Serie di tendenza</h1>
            <div class="trend-series position-relative">
                <AppCarousel :item="store.trendSeries" @show="showFocus" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.search-results {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
}

.title-section {
    text-transform: uppercase;
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
}

::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
}

::-webkit-scrollbar-track {
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: transparent;
}

.card_info {
    overflow-y: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    color: white;
    font-size: 11px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &:hover {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.736);
    }

    .vote,
    .language {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .overview {
        font-size: 10px;
    }

    .stars_full {
        color: gold;
    }

    .stars_empty {
        color: white;
    }
}
</style>