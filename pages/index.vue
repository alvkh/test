
<template>
  <main class="flex flex-col w-[85%] mx-auto gap-12 pt-[40px]">
    <div class="flex items-center">
      
      <div class="flex flex-col gap-8 w-full">
        <p class="font-Righteous-Regular text-black leading-[68px] text-[42px] lg:text-[60px]">Start Exploring in <span class="text-Primery">Test Project</span></p>
        <div class="flex flex-col gap-4">
          <p class="font-Righteous-Regular text-[18px] text-Secondry">Click here to see our products</p>
        <Button @click="()=>{
          navigateTo('/products')
        }" class="font-Righteous-Regular gap-2 text-[14px] w-fit"><Icon name="mdi:shop-outline" size="20" color="white" />Check Shop</Button> 
        </div>
      </div>
      <img class="lg:block hidden" src="@/assets/img/shop.png" alt="">
    </div>
    <div class="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 justify-between">
      <common_card icon="solar:cup-first-bold">
        <p class="font-Righteous-Regular text-pretty text-[16px]">Number One</p>
        <p class="font-Righteous-Regular text-Secondry text-[14px]">Deliver fast and safe</p>
      </common_card>
      <common_card icon="carbon:delivery-add">
        <p class="font-Righteous-Regular text-pretty text-[16px]">Free Shipping</p>
        <p class="font-Righteous-Regular text-Secondry text-[14px]">Order over 150 $</p>
      </common_card>
      <common_card icon="solar:cup-first-bold">
        <p class="font-Righteous-Regular text-pretty text-[16px]">Number One</p>
        <p class="font-Righteous-Regular text-Secondry text-[14px]">Deliver fast and safe</p>
      </common_card>
      <common_card icon="fluent:person-support-20-regular">
        <p class="font-Righteous-Regular text-pretty text-[16px]">24 / 7 Support</p>
        <p class="font-Righteous-Regular text-Secondry text-[14px]">Dedicated support</p>
      </common_card>
        
    </div>
    <div class="flex flex-col gap-4 w-full">
      <p class="text-[32px] font-Righteous-Regular text-center">Our Procucts</p>
      <carsol_products />
    </div>
    
  </main>
</template>

<script setup>
</script>
