<template>
  <div class="flex border border-gray-100 bg-white shadow-md shadow-gray-300 rounded-lg w-[300px] sm:w-[400px] h-[450px]">
    <div class="flex flex-col p-4 py-[30px] w-full gap-[34px]">
      <p class="font-Righteous-Regular text-[24px] text-center text-Primery tracking-tighter">TestProject</p>
      <p class="font-Poppins-Regular text-[14px] text-center text-Secondry">Login | Sign in</p>
      <div class="flex flex-col">
        <p class="font-Righteous-Regular text-[14px] text-Secondry">Hello</p>
        <p class="font-Righteous-Regular text-[14px] text-Secondry">Please Enter you phone number below </p>
      </div>
      <div class="flex flex-col">
    <label for="phone" class="font-Righteous-Regular text-[14px] mb-2">Phone</label>
    <InputMask id="phone" @change="validator" class="placeholder:text-gray-400" v-model.lazy="phone" mask="999-999-999-9999" placeholder="(999) 999-9999-999" :invalid="invalid" />
    <transition name="page">
      <p v-if="invalid" class="text-[10px] text-red-500">Please Enter Input currectly</p>
    </transition>
    </div>
    <Button class="font-Righteous-Regular text-[13px]" @click="()=>{
            loginstore.phone_numbers = phone
            loginstore.next_step(2)

        }" rounded label="Next step" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {useloginStore} from '@/store/auth'
const loginstore = useloginStore()
const step = computed(()=> loginstore.steps)
const phone = ref<Number>(0)
const invalid = ref<Boolean>(false)
function validator(){
  if(String(phone.value).indexOf('098') == -1){
    invalid.value = true
  }
  else if(phone.value == ''){
    invalid.value = true
  }
  else{
    invalid.value = false
  }
}
</script>

<style>

</style>