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
        <div class="navbar flex-grow-1">
            <ul class="nav-menu mb-0">
                <li class="nav-item" @click="$emit('home')"><a href="#">Home</a></li>
                <li class="nav-item" @click="$emit('serie')"><a href="#">Serie Tv</a></li>
                <li class="nav-item" @click="$emit('film')"><a href="#">Film</a></li>
            </ul>
        </div>
        <div class="right-side d-flex align-items-center gap-3 text-white">
            <div class="search-bar">
                <input v-if="show" type="text" @keyup.enter="$emit('search')" v-model.trim="store.searchText">
                <font-awesome-icon class="search" icon="fa-solid fa-magnifying-glass" @click="toggleSearch()" />
            </div>
            <div class="position-relative">
                <font-awesome-icon class="bell" icon="fa-solid fa-bell" />
                <span
                    class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                </span>
            </div>
            <figure class="mb-0">
                <img class="user-avatar" src="/Netflix-avatar.png" alt="">
            </figure>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    gap: 35px;
    padding: 10px 26px;

    .app-logo {
        width: 160px;
    }
}

.nav-menu {
    display: flex;
    gap: 10px;

    .nav-item a {
        color: lightgrey;
        font-size: 18px;

        &:hover {
            color: white;
        }
    }
}

.right-side {
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

.search,
.bell {
    font-size: 18px;
}

.user-avatar {
    width: 30px;
}
</style>