<template>
    <div class="flex border border-gray-100 bg-white shadow-md just shadow-gray-300 rounded-lg w-[300px] sm:w-[400px] h-[450px]">
      <div class="flex flex-col p-4 py-[30px] w-full gap-[34px]">
        <p class="font-Righteous-Regular text-[24px] text-center text-Primery tracking-tighter">TestProject</p>
        <p class="font-Poppins-Regular text-[14px] text-center text-Secondry">Login | Sign in</p>
        <div class="flex flex-col justify-center items-center">
            <p class="text-[32px] font-Righteous-Regular text-Primery">Well done</p>
            <p class="text-[16px] font-Righteous-Regular text-Secondry">Press here to return to first page</p>
        </div>

      <Button class="font-Righteous-Regular text-[13px] mt-[100px]" @click="()=>{
              navigateTo('/')
          }" rounded label="Finish" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import InputText from 'primevue/inputtext';
  import {useloginStore} from '@/store/auth'
  const loginstore = useloginStore()
  const floatlable = ref(false)
  const step = computed(()=> loginstore.steps)
  const user_name = ref<String | null>(null)
  const email = ref<String | null>(null)
  const address = ref<String | null>(null)
  const postal = ref<String | null>(null)
  const pass = ref<String | null>(null)
  const invalid = ref<Boolean>(false)
  </script>
  
  <style>
  
  </style>