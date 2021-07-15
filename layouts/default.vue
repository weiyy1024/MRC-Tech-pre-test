<template lang="pug">
    section.full
        NavFirst
        BannerAdv.left(:list='advFloat[0]')
        BannerAdv.right(:list='advFloat[1]')
        Nuxt
        GoTop
        Footer(:list='friends')
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters({
          friends:'friendship-link/list',
          advFloat:'adv/float'
      })  
    }
} 
</script>

<style lang="scss" scoped>
    .full{
        width: 100%;
        margin: 0;
        position: relative;
    }
</style>