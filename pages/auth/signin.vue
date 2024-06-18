<template>
    <div class="flex flex-col w-full h-screen justify-center items-center">
        <transition name="page" mode="out-in">
            <auth-register-number v-if="step == 1" />
            <auth-register-otp v-else-if="step == 2" />
            <auth-register-form v-else-if="step == 3" />
            <auth-register-done v-else-if="step == 4" />
            </transition>
    </div>
</template>

<script setup>
import {useloginStore} from '@/store/auth'
const loginstore = useloginStore()
const step = computed(()=> loginstore.steps)




// setPageLayout('')
//     definePageMeta({
//   middleware: [
//     function (to, from) {
//       // Custom inline middleware
//     },
//     'auth',
//   ],
// });
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>