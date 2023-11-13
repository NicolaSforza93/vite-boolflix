<script>
export default {
    data() {
        return {
            flags: ['de', 'en', 'es', 'fr', 'it'],
            stars: Math.ceil(this.item.vote_average / 2)
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}

</script>

<template>
    <div class="card_poster">
        <img :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" alt="">
    </div>
    <div class="card_info">
        <p><strong>Titolo:</strong> {{ item.title }} {{ item.name }}</p>
        <p>
            <strong>Titolo originale:</strong> {{ item.original_title }} {{ item.original_name }}
        </p>
        <div class="language">
            <p><strong>Lingua:</strong></p>
            <span v-if="!flags.includes(item.original_language)">{{ item.original_language }}</span>
            <div class="flags-image" v-else>
                <img :src="`/flags/${item.original_language}.png`" alt="">
            </div>
        </div>
        <div class="vote">
            <p><strong>Voto:</strong></p>
            <div class="stars">
                <font-awesome-icon icon="fa-solid fa-star" v-for="index in this.stars" :key="index" class="stars_full" />
                <font-awesome-icon icon="fa-solid fa-star" v-for="index in 5 - this.stars" :key="index"
                    class="stars_empty" />
            </div>
        </div>
        <p class="overview">{{ item.overview }}</p>
    </div>
</template>

<style lang="scss" scoped>
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
}

.flags-image {
    width: 20px;
}

.stars_full {
    color: gold;
}

.stars_empty {
    color: white;
}
</style>