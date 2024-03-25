<script>
import axios from 'axios';
import { store } from '../store';

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            flags: ['de', 'en', 'es', 'fr', 'it', 'ja'],
            isReadMore: false,
        }
    },
    methods: {
        toggleReadMore() {
            this.isReadMore = !this.isReadMore;
        }
    },
    computed: {
        vote() {
            return Math.ceil(this.item.vote_average / 2);
        },
        buttonText() {
            return this.isReadMore ? 'Less info' : 'More info';
        }
    },
}
</script>

<template>
    <h1 class="title mb-0 text-uppercase">{{ item.title || item.name }}</h1>
    <h6 v-show="item.title !== item.original_title || item.name !== item.original_name" class="mb-0">
        <strong>Titolo originale:</strong> {{ item.original_title || item.original_name }}
    </h6>
    <ul class="ps-0 mb-0 d-flex gap-3">
        <li>
            <div class="vote">
                <div class="stars">
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote" :key="n" class="stars_full" />
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in 5 - vote" :key="n" class="stars_empty" />
                </div>
            </div>
        </li>
        <li>
            <span class="badge text-bg-secondary text-uppercase rounded-0 p-1">{{ item.media_type }}</span>
        </li>
        <li>
            <span>{{ item.release_date || item.first_air_date }}</span>
        </li>
    </ul>
    <div class="language d-flex align-items-center gap-2">
        <p class="mb-0"><strong>Lingua:</strong></p>
        <span v-if="!flags.includes(item.original_language)">{{ item.original_language
        }}</span>
        <div class="flags-image" v-else>
            <img :src="`/flags/${item.original_language}.png`" alt="">
        </div>
    </div>

    <div class="text-container mb-4">
        <p class="overview mb-0" :class="this.isReadMore ? 'height-auto' : 'height-100'">{{
            item.overview }}
        </p>
    </div>
    <button class="btn btn-light me-2"><font-awesome-icon icon="fa-solid fa-play" /> Play</button>
    <button class="readMoreBtn btn btn-secondary" @click="toggleReadMore"><font-awesome-icon
            icon="fa-solid fa-circle-exclamation" /> {{
                buttonText }}</button>
</template>

<style lang="scss" scoped>
.focus-info {
    color: white;
    padding: 12px 0px;

    .title {
        font-size: 30px;
    }

    .btn {
        border-radius: 3px;
    }
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

.overview {
    overflow: hidden;
    transition: height 0.3s ease;
}

.height-auto {
    height: auto;
}

.height-100 {
    height: 70px;
}
</style>