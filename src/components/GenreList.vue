<script>
import AppCard from './AppCard.vue';

export default {
    components: { AppCard },
    props: {
        genres: {
            type: Array,
            required: true
        }
    }
}

</script>

<template>
    <div v-for="(genre, index) in genres" :key="index" class="card">
        <AppCard :item="genre" />
    </div>
</template>

<style lang="scss" scoped>
.card {
    background-color: white;
}
</style>