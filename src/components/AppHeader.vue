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
        <div class="navbar">
            <ul class="nav-menu">
                <li class="nav-item"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#">Serie Tv</a></li>
                <li class="nav-item"><a href="#">Film</a></li>
            </ul>
        </div>
        <div class="search-bar">
            <input type="text" v-model.trim="store.searchText">
            <button @click="$emit('search')">Search</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    gap: 35px;
    padding: 10px;
    background-color: black;

    .app-logo {
        width: 160px;
    }
}

.navbar {
    flex-grow: 1;
}

.nav-menu {
    display: flex;
    gap: 10px;

    .nav-item a {
        color: lightgrey;
        font-size: 15px;

        &:hover {
            color: white;
        }
    }
}

.search-bar {
    justify-content: end;
    display: flex;
    align-items: center;
    gap: 5px;

    input {
        align-self: stretch;
        border: 1px solid white;
        color: white;
        background-color: black;
    }

    button {
        background-color: red;
        color: white;
        padding: 5px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
}
</style>