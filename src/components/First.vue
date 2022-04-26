<template>
  <div>
      <h2>First Parent Component</h2>
      <h2>{{title}}</h2>
      <h3>{{waheGuru}}</h3>
      <h3>{{WaheGuru1313('1313Wahe Guru ')}}</h3>
      <p>{{$store.state.name}}</p>
      <ChildVue />
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import ChildVue from './Child.vue'
export default {
  name: "FirstVue",
  components:{
      ChildVue
  },
  computed:{
      ...mapState({
          title: state => state.name
      }),
      ...mapGetters({
          waheGuru: 'newWaheGuruAdd',
          WaheGuru1313: 'abcWaheGuru'
      })
    //   waheGuru(){
    //     //  return this.$store.getters.WaheGuruAdd
    //      return this.$store.getters.newWaheGuruAdd
    //   },

    //   WaheGuru1313(){
    //       return this.$store.getters.abcWaheGuru('1313Wahe Guru Satname')
      }
  
};
</script>

<style scoped></style>
