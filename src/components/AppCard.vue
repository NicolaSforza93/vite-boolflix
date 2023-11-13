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
    <div class="card-content">
        <img :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" alt="">
        <h3>Titolo: {{ item.title }} {{ item.name }}</h3>
        <h4>Titolo originale: {{ item.original_title }} {{ item.original_name }}</h4>
        <p v-if="!flags.includes(item.original_language)">Lingua: {{ item.original_language }}</p>
        <div class="flags-image" v-else>
            <span>Lingua:</span>
            <img :src="`/flags/${item.original_language}.png`" alt="">
        </div>
        <div>
            <p>Valutazione:</p>
            <div class="stars">
                <font-awesome-icon icon="fa-solid fa-star" v-for="index in this.stars" :key="index" class="stars_full" />
                <font-awesome-icon icon="fa-solid fa-star" v-for="index in 5 - this.stars" :key="index"
                    class="stars_empty" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flags-image {
    width: 20px;
}

.card-content {
    padding: 5px;
}

.stars_full {
    color: gold;
}

.stars_empty {
    color: black;
}
</style>