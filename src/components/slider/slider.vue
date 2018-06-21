<template>
    <yd-slider autoplay="5000" speed="1000">
        <yd-slider-item v-for="item in slides" :key="item.id">
            <template v-if="item.href">
                <a :href="item.href"><img :src="item.imgUrl"></a>
            </template>
            <template v-else>
                <img :src="item.imgUrl">
            </template>
        </yd-slider-item>
    </yd-slider>
</template>

<script>
    export default {
        props: {
          slides: {
            type: Array
          }
        }
    }
</script>

<style scoped>
	a img { vertical-align: middle; }
</style>