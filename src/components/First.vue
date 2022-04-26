<template>
  <div>
      <h2>First Parent Component</h2>
      <p>{{$store.state.name}}</p>
      <ChildVue />
  </div>
</template>

<script>
import ChildVue from './Child.vue'
export default {
  name: "FirstVue",
  components:{
      ChildVue
  }
};
</script>

<style scoped></style>
