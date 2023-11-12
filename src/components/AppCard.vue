<script>
export default {
    data() {
        return {
            flags: ['de', 'en', 'es', 'fr', 'it']
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
        <h3>Titolo: {{ item.title }} {{ item.name }}</h3>
        <h4>Titolo originale: {{ item.original_title }} {{ item.original_name }}</h4>
        <p v-if="!flags.includes(item.original_language)">Lingua: {{ item.original_language }}</p>
        <div class="flags-image" v-else>
            <span>Lingua:</span>
            <img :src="`/flags/${item.original_language}.png`" alt="">
        </div>
        <p>Valutazione: {{ item.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
.flags-image {
    width: 20px;
}

.card-content {
    padding: 5px;
}
</style>