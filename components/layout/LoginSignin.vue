<template>
  <div v-if="!datas" class="flex gap-2">
        <Button class="font-Righteous-Regular text-[13px]" @click="open" rounded label="Login" />
        <Button  @click="change_route" class="font-Righteous-Regular text-[13px]" rounded label="Sign in" />
        </div>
        <div v-else @click="show_menu =! show_menu " class="flex gap-2 border relative border-gray-300 justify-around w-[200px] px-4 py-1 rounded-2xl items-center">
            <Avatar icon="pi pi-user" class="mr-2"  style="background-color: #ece9fc; color: #2a1261" shape="circle" />
            <div class="card flex justify-center items-center">
        <p v-if="datas?.user_name" class="font-Righteous-Regular text-[14px] text-Secondry cursor-pointer" >{{ datas.user_name }}</p>
        <Skeleton v-else height="1rem" width="50px" />
        <Menu v-if="show_menu" :model="items" class="absolute top-[100%] left-0">
            <template #submenulabel="{ item }">
                <span class="text-primary font-bold">{{ item.label }}</span>
            </template>
            <template #item="{ item, props }">
                <a @click="item.label == 'Logout' ? logout(): ''" v-ripple class="flex items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                </a>
            </template>
        </Menu>
    </div>
      </div>

</template>

<script setup lang="ts">
import { useloginStore } from "~/store/auth"
const loginstore = useloginStore()
const datas = computed(()=> loginstore.datas)
const login = computed(()=> loginstore.logins)
const user_loged = ref<boolean>(true)
const show_menu = ref<boolean>(false)
function open() {
    loginstore.login_modal()
}
function change_route() {
      navigateTo('/auth/signin')
      
}
const menu = ref();
const items = ref([
    {
        separator: true
    },
    {
        label: 'Menu',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                shortcut: '⌘+S'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                shortcut: '⌘+Q',
            }
        ]
    }
]);
const toggle = (event) => {
    menu.value.toggle(event);
}
function logout(){
      localStorage.removeItem('personal')
      loginstore.datas = localStorage.getItem('personal')
}
</script>

<style>


</style>