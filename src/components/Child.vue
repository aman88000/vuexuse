<template>
    <div>
        <h3>Child vue component</h3>
        <p>{{$store.state.title}}</p>
        <button @click="changeTitle({title: 'test mapActions'})">Change Title</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        name: 'ChildVue',
        methods: {

            ...mapActions({
                changeTitle: 'newTitle2'
            }),
            // changeTitle(){
            //   //  this.$store.state.title = 'abcd';     // simple way
            //   //  this.$store.commit('setTitle', 'updated Title')     // 1 way
            // //   this.$store.commit('setTitle', {                    // 2 way
            // //       title: 'vuex Title'
            // //   })

            // //    this.$store.commit({
            // //        type: 'setTitle',
            // //       title: 'vuex Title'
            // //   })


            // // this.$store.dispatch({
            // //     type: 'newTitle', title: 'new Action Title'
            // // }).then((res)=> console.log(res))

            //     this.$store.dispatch({
            //     type: 'newTitle2', title: 'new Action Title newTitle 2'
            // })
            //  }
        }
    }
</script>

<style scoped>

</style>