<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            show: false
        }
    },
    methods: {
        toggleSearch() {
            this.show = !this.show;
            store.searchText = '';
        }
    }
}

</script>

<template>
    <header>
        <div class="app-logo">
            <img src="/logo.png" alt="">
        </div>
        <div class="navbar">
            <ul class="nav-menu">
                <li class="nav-item" @click="$emit('home')"><a href="#">Home</a></li>
                <li class="nav-item" @click="$emit('serie')"><a href="#">Serie Tv</a></li>
                <li class="nav-item" @click="$emit('film')"><a href="#">Film</a></li>
            </ul>
        </div>
        <div class="right-side">
            <div class="search-bar">
                <input v-if="show" type="text" @keyup.enter="$emit('search')" v-model.trim="store.searchText">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" @click="toggleSearch()" />
            </div>
            <font-awesome-icon class="bell" icon="fa-solid fa-bell" />
            <img class="user-avatar" src="/Netflix-avatar.png" alt="">

        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

header {
    display: flex;
    align-items: center;
    gap: 35px;
    padding: 10px 26px;
    background-color: $app-color;

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

.right-side {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    cursor: pointer;
}

.search-bar {
    justify-content: end;
    display: flex;
    align-items: center;
    gap: 5px;

    input {
        align-self: stretch;
        border: 1px solid red;
        color: white;
        background-color: black;
    }
}

.user-avatar {
    width: 25px;
}
</style>