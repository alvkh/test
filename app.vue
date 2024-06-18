<template>
  <Nuxt-layout >
    <nuxt-page />
  </Nuxt-layout>
</template>
<script setup>
const route = useRoute()
import { useloginStore } from "~/store/auth"
const loginstore = useloginStore()
const layout = computed(()=>{
  if(route.path.includes('signin'))
  {
    return 'sing'  
  }
  else
  {
    return 'default'
  }
})
onMounted(()=>{
      loginstore.datas = JSON.parse(localStorage.getItem('personal'))
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

