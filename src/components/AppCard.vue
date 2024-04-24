<script>
export default {
    data() {
        return {
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
}

</script>

<template>
    <div class="card">
        <figure class="card_poster mb-0">
            <img v-if="item.poster_path" :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" alt=""
                class="img-fluid rounded">
            <img v-else src="https://placehold.co/800x1200?text=Immagine&font=roboto" alt="Immagine generica"
                class="img-placeholder img-fluid rounded">
        </figure>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: none;
    height: 100%;
    user-select: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(0.9);
        transition: all 0.3s ease-in-out;
        // transition-delay: 0.4s;
    }
}

.card_poster {
    height: 100%;

    .img-fluid {
        height: 100%;
    }
}
</style>