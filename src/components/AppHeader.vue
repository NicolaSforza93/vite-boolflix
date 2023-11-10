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
        <h1 class="app-logo">Boolflix</h1>
        <div class="search-bar">
            <input type="text" v-model="store.searchText">
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
        color: red;
    }
}
</style>