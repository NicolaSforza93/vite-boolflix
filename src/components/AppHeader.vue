<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },
}

</script>

<template>
    <header>
        <div class="app-logo">
            <img src="/logo.png" alt="">
        </div>
        <div class="search-bar">
            <input type="text" v-model.trim="store.searchText">
            <button @click="$emit('search')">Cerca</button>
        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: black;

    .app-logo {
        width: 125px;
    }
}
</style>