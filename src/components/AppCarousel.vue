<script>
import AppCard from './AppCard.vue';
import AppModal from './AppModal.vue';

import { Teleport } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Keyboard } from 'swiper/modules';

export default {
    components: {
        AppCard,
        AppModal,
        Swiper,
        SwiperSlide
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        modalSection: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            currentIndex: 0,
            modules: [Navigation, Pagination, Keyboard],
        }
    },
    methods: {
        nextItem() {
            this.currentIndex += 6;
            if (this.currentIndex > this.item.length - 6) {
                this.currentIndex = 0;
            }
        },

        prevItem() {
            this.currentIndex -= 6;
            if (this.currentIndex < 0) {
                this.currentIndex = this.item.length - 6;
            }
        },
    },
    computed: {
        visibleItem() {
            return this.item.slice(this.currentIndex, this.currentIndex + 6);
        }
    }
}
</script>

<template>
    <!-- <div class="carousel">
        <div class="prev fs-2" @click="prevItem">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </div>
        <div class="next fs-2" @click="nextItem">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </div>
        <div class="row">
            <div v-for="(element, index) in visibleItem" :key="index" class="col-2">
                <AppCard :item="element" data-bs-toggle="modal" :data-bs-target="`#${modalSection}${index}`" />
                <AppModal :item="element" :index="index" :id="`${modalSection}${index}`" />
            </div>
        </div>
    </div> -->
    <swiper :cssMode="true" :slidesPerView="6" :slidesPerGroup="6" :spaceBetween="10" :navigation="true" :pagination="{
        clickable: true,
    }" :keyboard="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(element, index) in item" :key="index">
            <AppCard :item="element" data-bs-toggle="modal" :data-bs-target="`#${modalSection}${index}`" />
            <!-- Funzionalità di Vue per spostare un componente nel body mantenendo le proprietà -->
            <teleport to="body">
                <AppModal :item="element" :index="index" :id="`${modalSection}${index}`" />
            </teleport>
        </swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped>
.prev,
.next {
    font-size: 30px;
    color: whitesmoke;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 999;
}

.prev {
    left: -20px;
}

.next {
    right: -20px;
}
</style>