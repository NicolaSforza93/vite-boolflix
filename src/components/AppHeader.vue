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
        // toggleSearch() {
        //     this.show = !this.show;
        //     store.searchText = '';
        // }
        resetPage() {
            store.seriesTv = [],
                store.movies = [],
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
                <li class="nav-item" @click="resetPage"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#">Serie Tv</a></li>
                <li class="nav-item"><a href="#">Film</a></li>
            </ul>
        </div>
        <div class="right-side d-flex align-items-center gap-4 text-white">
            <!-- <div class="search-bar">
                <input v-if="show" placeholder="Titoli" type="text" @keyup.enter="$emit('search')"
                    v-model.trim="store.searchText">
                <font-awesome-icon class="search" icon="fa-solid fa-magnifying-glass" @click="toggleSearch()" />
            </div> -->
            <div class="input-container">
                <input type="text" name="text" class="input" placeholder="Titoli..." @keyup.enter="$emit('search')"
                    v-model.trim="store.searchText">
                <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
            </div>
            <div class="position-relative">
                <font-awesome-icon class="bell" icon="fa-solid fa-bell" />
                <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                </span>
            </div>
            <figure class="mb-0">
                <img class="user-avatar rounded-1" src="/Netflix-avatar.png" alt="">
            </figure>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 23px;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.726);
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

// .search-bar {
//     justify-content: end;
//     display: flex;
//     align-items: center;
//     gap: 5px;

//     input {
//         align-self: stretch;
//         border: 1px solid red;
//         color: white;
//         background-color: black;
//     }
// }

.search,
.bell {
    font-size: 20px;
}

.user-avatar {
    width: 30px;
}

.input-container {
    position: relative;
    display: flex;
    align-items: center;
}

.input {
    width: 25px;
    height: 25px;
    border: none;
    color: white;
    outline: none;
    padding: 18px 0px;
    background-color: transparent;
    cursor: pointer;
    transition: all .5s ease-in-out;
}

.input::placeholder {
    color: transparent;
}

.input:focus::placeholder {
    color: rgb(131, 128, 128);
}

.input:focus,
.input:not(:placeholder-shown) {
    background-color: transparent;
    border: 1px solid white;
    width: 260px;
    padding: 18px 16px 18px 35px;
}

.icon {
    position: absolute;
    left: 0;
    height: 20px;
    width: 20px;
    padding: 0px 8px;
    z-index: -1;
}

.input:focus+.icon,
.input:not(:placeholder-shown)+.icon {
    z-index: 0;
    background-color: transparent;
    border: none;
}
</style>