<script>

export default {
    data() {
        return {
        }
    },

}
</script>

<template>
    <div class="info_meta-layer position-absolute w-50">
        <figure class="title-text_meta-layer">
            <img src="/AAAABSNUt-j1kRSNUT0gywsoRktqtAxLJ_F9JsZ7dg9QHgfLcJnMdXf7dMHZu32KM2paRgnPTFvhE9QiKBquctg4pDjdBScYhTVGK25X1ke3fzfatSG3RQKj35OU9zO_ah5lLUJlnDxtdhvI6bBU58CRMXeoHRrNj3QuJTBopcQ8b7LxTIbDU5YjKw.webp"
                alt="">
        </figure>

        <div>
            <p>
                Sono in inferiorità, male armati e fuori tempo massimo. La battaglia ha inizio ora che una banda di
                guerrieri ribelli decide di opporsi alla potenza del Mondo Madre.
            </p>
        </div>
        <button class="btn btn-light me-2"><font-awesome-icon icon="fa-solid fa-play" /> Riproduci</button>
        <button class="infoBtn btn btn-secondary"><font-awesome-icon icon="fa-solid fa-circle-exclamation" /> Altre
            info</button>
    </div>
</template>

<style lang="scss" scoped>
.title-text_meta-layer {
    width: 80%;
}

.infoBtn {
    background-color: rgb(84, 81, 80);
    border: none;
}

.btn {
    font-size: 20px;
}

.info_meta-layer {
    z-index: 1;
    top: -580px;
}
</style>