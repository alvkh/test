<template>
    <main class="flex relative flex-col lg:py-[15px] lg:px-4 mx-auto">
      <transition name="page">
        <layout_menu_bar v-if="show_dialog" />
      </transition>
      <transition name="page">
        <div class="top-0 left-0 sm:hidden w-screen h-screen fixed z-10" v-if="show_menu" @click="show_menu = false"/>    
      </transition>
      <transition name="page">
        <div v-if="show_menu" class="flex sm:hidden py-4 z-20 flex-col gap-4 bg-white items-center fixed w-screen h-[200px] shadow-md shadow-gray-400">
          <layout-navbar />
          <layout-login-signin />
        </div>
      </transition>
      <transition name="page">
        <div class=" top-0 left-0 w-screen h-screen absolute z-10" v-if="show_dialog" @click="show_dialog = false"/>        
      </transition>
        <auth-login class="!hidden sm:flex" />
        <header class="flex justify-between items-center py-3">
          <div class="flex items-center gap-10">
            <layout-logo />
            <layout-navbar class="!hidden sm:flex" @hover="show_dialog = ! show_dialog" />
          </div>
          <layout-login-signin class="!hidden sm:flex"/>
        <Icon @click="show_menu = true" name="mdi:menu" size="24" color="black" class="sm:hidden" />

        </header>
          <slot />
        <footer class="w-full pt-[100px]">
          <div class="grid px-[20px] lg:px-[80px] gap-10 lg:gap-0 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 border-t py-6">
      <div class="flex gap-8 flex-col sm:border-r">
        <div class="flex gap-4 items-center">
          <img src="@/assets/img/logo.svg" class="w-[48px]" alt="">
          <p class="text-[18px] font-Righteous-Regular ">Test <span class="text-Primery">Project</span></p>
        </div>
        <div class="card gap-2 flex lg:flex-roe flex-col justify-center">
          <FloatLabel>
            <InputText id="username" v-model="value" />
            <label for="username" class="text-[12px] font-Righteous-Regular">Email</label>
         </FloatLabel>
          <Button label="Submit" />
        </div>
        <p class="text-[14px] ps-4 font-Righteous-Regular text-Secondry">Enter you Email for getting news</p>
      </div>
      <div class="flex flex-col lg:ps-[60px] col-span-1 justify-center gap-4">
        <nuxt-link to="/" class="text-[14px] font-Righteous-Regular text-Secondry">Home</nuxt-link>
        <nuxt-link to="/products" class="text-[14px] font-Righteous-Regular text-Secondry">Products</nuxt-link>
        <nuxt-link to="/auth/signin" class="text-[14px] font-Righteous-Regular text-Secondry">Sign in</nuxt-link>
      </div>
    </div>
    <div class="flex font-Righteous-Regular border-t py-2 text-[14px] text-center sm:text-start text-Secondry flex-col">
      <p>Powerd By Ali Vejdani</p>
    </div>
        </footer>
    </main>
</template>

<script lang="ts" setup>
const show_dialog = ref(false)
const show_menu = ref(false)
const value = ref(null);
</script>

<style>

</style>