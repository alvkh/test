
<template>
    <div class="card flex justify-content-center">
        <Dialog v-model:visible="login" modal class="p-4" :style="{ width: '25rem' }">
            <template  #container="{ closeCallback }">
                <span class="text-Primery  block font-Righteous-Regular  mb-5">Login in</span>
                <div class="flex align-items-center items-center gap-3 mb-3">
                    <label for="username" class="font-Righteous-Regular text-[13px] w-[4rem]">Username</label>
                    <InputText v-model="user_name" id="username" class="flex-auto" autocomplete="off" />
                </div>
                <div class="flex align-items-center items-center gap-3 mb-5">
                    <label for="email" class="font-Righteous-Regular text-[13px] w-[4rem]">Password</label>
                    <InputText v-model="password" id="email" class="flex-auto" autocomplete="off" />
                </div>
                <div class="flex justify-content-end gap-2">
                    <Button class="font-Righteous-Regular text-[13px]" type="button" label="Cancel" severity="secondary" @click="close"></Button>
                    <Button class="font-Righteous-Regular text-[13px]" type="button" label="Save" @click="close"></Button>
                </div>
            </template>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import { useloginStore } from "~/store/auth"
const loginstore = useloginStore()
const user_name = useLogin()    
const login = computed(()=> loginstore.logins)  
const password = ref(null)    
function close() {
    loginstore.logins = false
}
</script>
