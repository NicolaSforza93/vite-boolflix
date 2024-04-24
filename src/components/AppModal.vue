<script>
import axios from 'axios';
import { store } from '../store';


export default {
    data() {
        return {
            store,
            cast: {},
            video: {},
            genres: {},
            isReadMore: false,
            wordLimit: 25
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        index: Number
    },
    methods: {
        fetchCast() {
            axios.get(`https://api.themoviedb.org/3/${this.item.media_type}/${this.item.id}/credits`, {
                params: {
                    api_key: store.API_KEY,
                    language: 'it-IT'
                }
            }).then(res => {
                // console.log(res.data.cast);
                const cast = res.data.cast;
                this.cast = cast;
            })
        },
        fetchVideo() {
            axios.get(`https://api.themoviedb.org/3/${this.item.media_type}/${this.item.id}/videos`, {
                params: {
                    api_key: store.API_KEY,
                    language: 'it-IT'
                }
            }).then(res => {
                // console.log(res.data.results);
                const video = res.data.results[0];
                this.video = video;
            })
        },
        getVideoUrl() {
            // Ritorna l'URL del video YouTube
            return `https://www.youtube.com/embed/${this.video.key}?controls=0`;
        },
        fetchGenres() {
            axios.get(`https://api.themoviedb.org/3/${this.item.media_type}/${this.item.id}`, {
                params: {
                    api_key: store.API_KEY,
                    language: 'it-IT'
                }
            }).then(res => {
                // console.log(res.data.genres);
                const genres = res.data.genres;
                this.genres = genres;
            })
        },
        toggleReadMore() {
            this.isReadMore = !this.isReadMore;
        },
    },
    computed: {
        vote() {
            return Math.ceil(this.item.vote_average / 2);
        },
        displayedOverview() {
            if (this.isReadMore) {
                return this.item.overview;
            } else {
                const words = this.item.overview.split(' ');
                return words.slice(0, this.wordLimit).join(' ') + '...';
            }
        },
        showReadMoreBtn() {
            // Calcola il numero di parole nell'overview
            const wordCount = this.item.overview.split(' ').length;
            // Mostra il bottone solo se il numero di parole è maggiore o uguale a 20
            return wordCount >= this.wordLimit;
        },
        buttonText() {
            return this.isReadMore ? 'Leggi di meno' : 'Leggi di più';
        }
    },
    created() {
        this.fetchCast();
        this.fetchVideo();
        this.fetchGenres();
    },
    watch: {
        // Quando l'elemento viene cambiato, si esegue il fetch del video, del cast e dei generi
        item: {
            handler() {
                this.fetchVideo();
                this.fetchCast();
                this.fetchGenres()
            },
            immediate: true
        }
    }
}

</script>

<template>
    <div class="modal fade" :id="'modal-' + index" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content position-relative">
                <div class="modal-header">
                    <div v-if="video && video.key">
                        <div class="trailer">
                            <iframe :src="getVideoUrl()" frameborder="0" allowfullscreen class="rounded-top"></iframe>
                        </div>
                    </div>

                    <figure class="poster py-2 position-relative" v-else>
                        <img v-if="item.poster_path" :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" alt=""
                            class="img-fluid rounded">
                        <img v-else src="https://placehold.co/800x1200?text=Immagine&font=roboto"
                            alt="Immagine generica" class="img-placeholder img-fluid rounded">
                        <div v-if="!item.poster_path"
                            class="position-absolute top-0 start-50 translate-middle-x text-center">
                            <h3 class="text-secondary mt-2">
                                {{ item.original_title || item.original_name }}
                            </h3>
                        </div>
                    </figure>
                    <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-white d-flex gap-3">
                    <div class="col-8 d-flex flex-column gap-2">
                        <ul class="ps-0 mb-0 d-flex gap-3">
                            <li>
                                <div class="vote">
                                    <div class="stars">
                                        <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote" :key="n"
                                            class="stars_full" />
                                        <font-awesome-icon icon="fa-solid fa-star" v-for="n in 5 - vote" :key="n"
                                            class="stars_empty" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span class="badge text-bg-secondary text-uppercase rounded-0 p-1">{{ item.media_type
                                    }}</span>
                            </li>
                            <li>
                                <span>
                                    {{
                                        (item.release_date || item.first_air_date)
                                            ? (item.release_date || item.first_air_date).substring(0, 4)
                                            : 'Data non disponibile'
                                    }}
                                </span>
                            </li>
                        </ul>

                        <div class="language d-flex align-items-center gap-2">
                            <p class="mb-0 text-secondary">Lingua:</p>
                            <span v-if="!store.flags.includes(item.original_language)">{{ item.original_language
                                }}</span>
                            <div class="flags-image" v-else>
                                <img :src="`/flags/${item.original_language}.png`" alt="">
                            </div>
                        </div>
                        <div>
                            <div class="text-container">
                                <p class="overview mb-0">
                                    {{ displayedOverview }}
                                </p>
                            </div>
                            <button class="readMoreBtn btn btn-secondary" @click="toggleReadMore" v-show="item.overview"
                                v-if="showReadMoreBtn">
                                {{ buttonText }}
                            </button>
                        </div>
                    </div>
                    <div class="col-4">
                        <div v-if="cast.length > 0">
                            <span class="text-secondary">Cast:</span>
                            <ul class="cast mb-0 ps-0 d-flex flex-wrap gap-2 row-gap-0">
                                <li v-for="(actor, index) in cast.slice(0, 5)" :key="index">
                                    {{ actor.name }}
                                    <span v-if="index !== 4">,</span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="genres.length > 0" class="mt-2">
                            <span class="text-secondary">Generi:</span>
                            <ul class="cast mb-0 ps-0 d-flex flex-wrap gap-2 row-gap-0">
                                <li v-for="(genre, index) in genres" :key="index">
                                    {{ genre.name }}
                                    <span v-if="index !== genres.length - 1">,</span>
                                </li>
                            </ul>
                        </div>
                        <!-- <div v-show="item.title !== item.original_title || item.name !== item.original_name"
                            class="mt-2">
                            <span class="text-secondary">Titolo originale:</span>
                            <p class="mb-0">
                                {{ item.original_title || item.original_name }}
                            </p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    --bs-modal-width: 650px;
    --bs-modal-bg: rgb(23, 23, 23);
}

.modal-body {
    --bs-modal-padding: 30px
}

// .cast li:nth-child(n+6) {
//     display: none;
// }

.cast {
    font-size: 14px;
}


.stars_full {
    color: gold;
}

.stars_empty {
    color: white;
}

.flags-image {
    width: 20px;
}

.modal-header {
    display: block;
    padding: 0px;
    border-bottom: none;
}

.btn-close {
    top: 15px;
    right: 15px;
    border: 1px solid black;
    border-radius: 50px;
    background-color: whitesmoke;
}

.poster {
    max-width: 250px;
    margin: 0 auto;
}

.trailer {
    height: 300px;

    iframe {
        width: 100%;
        height: 100%;
    }
}

.text-container {
    overflow: hidden;
    transition: height 0.3s ease;
}

.height-auto {
    height: auto;
}

.height-100 {
    height: 70px;
}

.readMoreBtn {
    border: none;
    background-color: transparent;
    padding: 0px;
}
</style>