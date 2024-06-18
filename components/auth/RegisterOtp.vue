<template>
    <div class="flex border border-gray-100 bg-white shadow-md shadow-gray-300 rounded-lg w-[300px] sm:w-[400px]h-[450px]">
      <div class="flex flex-col p-4 py-[30px] w-full gap-[34px]">
        <p class="font-Righteous-Regular text-[24px] text-center text-Primery tracking-tighter">TestProject</p>
        <p class="font-Poppins-Regular text-[14px] text-center text-Secondry">Login | Sign in</p>
        <div class="flex flex-col">
            <div class="font-Righteous-Regular text-xl mb-2">Authenticate Your Account</div>
          <p class="font-Righteous-Regular text-[14px] text-Secondry">Please enter the code sent to your phone.</p>
        </div>
        <div class="card flex justify-center">
        <div class="flex flex-col justify-center items-center">
            <InputOtp v-model="value" :length="6" style="gap: 0">
                <template #default="{ attrs, events}">
                    <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
                </template>
            </InputOtp>
        </div>
    </div>
      <Button class="font-Righteous-Regular text-[13px]" @click="()=>{
              loginstore.next_step(3)
          }" rounded label="Next step" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import {useloginStore} from '@/store/auth'
  const loginstore = useloginStore()
  const step = computed(()=> loginstore.steps)
  const phone = ref<Number>(0)
  const value = ref<any>(null);
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
  
  <style scoped>
  .custom-otp-input {
    width: 48px;
    height: 48px;
    font-size: 24px;
    appearance: none;
    text-align: center;
    transition: all 0.2s;
    border-radius: 0;
    border: 1px solid var(--surface-400);
    background: transparent;
    outline-offset: -2px;
    outline-color: transparent;
    border-right: 0 none;
    transition: outline-color 0.3s;
    color: var(--text-color);
}

.custom-otp-input:focus {
    outline: 2px solid var(--primary-color);
}

.custom-otp-input:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
}

.custom-otp-input:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-right-width: 1px;
    border-right-style: solid;
    border-color: var(--surface-400);
}
  
  </style>