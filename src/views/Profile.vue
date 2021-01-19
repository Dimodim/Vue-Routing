<template>
    <div>
        <h3>Profile{{$route.params.id}}</h3>
        <router-link :to="{ name: 'ProfileWithId', params: { id:'4321' } }"> Profile with ID</router-link>
        <br>
        <router-link :to="{ name: 'Info', params: { id:'4321' } }"> Profile Info</router-link>
        <br>
        <router-link :to="{ name: 'ProfileWithId', params: { id:'4321' }, query: { profile: 'private'} }"> Profile with query params</router-link>
    <router-view></router-view>
    </div>
</template>

<script>
    export default {
         name: "Profile",
        //  mounted(){
        //      console.log(this.$route.params.id)
        //  },
         watch:{
             $route(to,from){
                 console.log('to:', to)
                 console.log('from:', from)
             }

         }
    }
</script>

<style lang="scss" scoped>

</style>