<template>
    <div class="grid grid-cols-3 gap-6 w-[90%] mx-auto">
      <div class="flex gap-1 text-[14px] p-4 col-span-3">
        <nuxt-link to="/" class="text-gray-500 font-Righteous-Regular"
          >home/</nuxt-link
        >
        <nuxt-link
          to="/products"
          class="text-gray-500 font-Righteous-Regular"
          >products /</nuxt-link
        >
        <p class="text-gray-500 font-Righteous-Regular">
          {{ route.params.id }}
        </p>
      </div>
      <div class="col-span-1 grid grid-cols-6 gap-y-10">
        <img
          class="mx-auto col-span-6"
          :src="products?.image"
          alt=""
        />
        <!-- <img
          class="w-[90%] col-span-1 border rounded-xl p-1"
          v-for="i in 6"
          :key="i"
          src="../../../../assets/img/book.jpg"
          alt=""
        /> -->
      </div>
      <div class="col-span-2 flex flex-col w-full">
        <p
          class="text-[22px] font-peyda-bold text-gray-600 border-b py-2 border-gray-200"
        >
          {{ products?.title }}
        </p>
        <div class="flex gap-4">
          <div class="flex gap-2 py-2">
            <i class="pi pi-star-fill text-yellow-500"></i>
            <p class="font-Righteous-Regular text-[13px] text-gray-500">{{ products?.rating?.rate }}</p>
            <p class="font-Righteous-Regular text-[13px] text-gray-400">
             from {{ products?.rating?.count }} vote
            </p>
          </div>
          <p class="font-Righteous-Regular py-2 text-[13px] text-blue-300">
            6000 Comments
          </p>
          <p class="font-Righteous-Regular py-2 text-[13px] text-blue-300" >
            1799 Q
          </p>
        </div>
        <div class="flex gap-2 items-center">
          <p class="text-[12px] font-Righteous-Regular pt-2 text-gray-400">recommended by {{ products?.rating?.count }} persons</p>
        </div>
        <div class="flex flex-col gap-8 py-10 ">
          <p class="font-Righteous-Regular text-[18px] text-gray-600"> overview :</p>
          <p class="font-Righteous-Regular text-Secondry text-[13px]">{{ products?.description }}</p>
          <ul class="list-disc gap-2 grid grid-cols-3 text-black">
            <li class="flex flex-col gap-1 bg-gray-100 p-2 rounded-md shadow-md shadow-gray-300 ">
              <p class="text-gray-500 font-Righteous-Regular text-[15px]">Catagory :</p>
              <p class="text-[#4a4afda6] font-Righteous-Regular text-[14px]"> {{ products?.category }}</p>
            </li>
            <li class="flex flex-col gap-1 bg-gray-100 p-2 rounded-md shadow-md shadow-gray-300 ">
              <p class="text-gray-500 font-Righteous-Regular text-[15px]">Price :</p>
              <p class="text-[#4a4afda6] font-Righteous-Regular text-[14px]"> {{ products?.price }} $</p>
            </li>
            <li class="flex gap-2">
                <Button icon="pi pi-shopping-cart" class="flex-auto whitespace-nowrap text-[14px]">Buy now </Button>
                <Button class="w-[60px]" icon="pi pi-heart" outlined></Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  const route = useRoute();
  import { useloginStore } from "~/store/auth";
    const loginstore = useloginStore()
    const products = computed(()=> loginstore.fetchdatas)
    onMounted(() => {
        Promise.all([loginstore.fetch(route.params.id)])
    });
  </script>