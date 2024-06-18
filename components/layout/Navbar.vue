<template>
  <nav class="flex sm:flex-row flex-col gap-4 items-center text-[16px]">
    <nuxt-link class="font-Righteous-Regular text-Secondry" to="/"> Home </nuxt-link>
    <p @click="()=>{
      emit('hover')
    }" class="font-Righteous-Regular text-Secondry cur"> Products </p>
  </nav>
</template>

<script setup>
const emit = defineEmits(['hover'])
</script>

<style>

</style>