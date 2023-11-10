<script>
export default {
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
        <h3>{{ item.title }}</h3>
        <h4>{{ item.original_title }}</h4>
        <p>{{ item.original_language }}</p>
        <p>{{ item.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped></style>