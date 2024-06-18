<template>
    <div class="flex border border-gray-100 bg-white shadow-md shadow-gray-300 rounded-lg w-[300px] sm:w-[400px]  sm:h-[450px]">
      <div class="flex flex-col p-4 py-[30px] w-full gap-[34px]">
        <p class="font-Righteous-Regular text-[24px] text-center text-Primery tracking-tighter">TestProject</p>
        <p class="font-Poppins-Regular text-[14px] text-center text-Secondry">Login | Sign in</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
            <div class="card flex justify-content-center">
        <FloatLabel class="font-Righteous-Regular text-[14px]">
            <InputText class="w-[180px]" id="username" v-model="user_name" />
            <label  for="username">Username</label>
        </FloatLabel>
    </div>
    <div class="card flex justify-content-center">
        <FloatLabel class="font-Righteous-Regular text-[14px]">
            <InputText class="w-[180px]" id="email" v-model="email" />
            <label for="email">Email</label>
        </FloatLabel>
    </div>
    <div class="card flex justify-content-center">
        <FloatLabel class="font-Righteous-Regular text-[14px]">
            <InputText class="w-[180px]" id="email" v-model="address" />
            <label for="email">Address</label>
        </FloatLabel>
    </div>
    <div class="card flex justify-content-center">
        <FloatLabel class="font-Righteous-Regular text-[14px]">
            <InputText class="w-[180px]" id="email" v-model="postal" />
            <label for="email">Postal Card</label>
        </FloatLabel>
    </div>
        <div class="card flex justify-content-center">
        <FloatLabel class="font-Righteous-Regular w-[180px] text-[14px]">
            <Password v-model="pass" inputId="password" />
            <label for="password">Password</label>
        </FloatLabel>
        </div>
        </div>

      <Button class="font-Righteous-Regular text-[13px]" @click="()=>{
        loginstore.saveto_local({
            email:email,
            user_name:user_name,
            address:address,
            password:pass,
            postal:postal,
        })
        
              loginstore.next_step(4)
          }" rounded label="Next step" />
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