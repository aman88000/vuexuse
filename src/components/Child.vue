<template>
    <div>
        <h3>Child vue component</h3>
        <p>{{$store.state.title}}</p>
    </div>
</template>

<script>
    export default {
        name: 'ChildVue'
    }
</script>

<style scoped>

</style>