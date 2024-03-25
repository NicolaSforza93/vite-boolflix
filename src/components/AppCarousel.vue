<script>
import AppCard from './AppCard.vue';

export default {
    components: {
        AppCard
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            currentIndex: 0,
        }
    },
    methods: {
        nextItem() {
            this.currentIndex++;
            if (this.currentIndex > this.item.length - 6) {
                this.currentIndex = 0;
            }
        },

        prevItem() {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.item.length - 6;
            }
        }
    },
    computed: {
        visibleItem() {
            return this.item.slice(this.currentIndex, this.currentIndex + 6);
        }
    }
}
</script>

<template>
    <div class="carousel">
        <div class="prev fs-2" @click="prevItem">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </div>
        <div class="next fs-2" @click="nextItem">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </div>
        <div class="row">
            <div v-for="(element, index) in visibleItem" :key="index" class="col-2">
                <AppCard :item="element" @click="$emit('show', element)" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.prev,
.next {
    font-size: 30px;
    color: grey;
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