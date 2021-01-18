<template>
    <div>
        <h3>Profile{{$route.params.id}}</h3>
    </div>
</template>

<script>
    export default {
         name: "Profile",
         mounted(){
             console.log(this.$route.params.id)
         }
    }
</script>

<style lang="scss" scoped>

</style>