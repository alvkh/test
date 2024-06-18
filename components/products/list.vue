
<template>
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        <transition name="page">
        <div class="top-0 left-0 sm:hidden w-screen h-screen fixed z-10" v-if="show_menu" @click="show_menu = false"/>    
      </transition>
        <div class="card col-span-3">
        <transition name="page" mode="out-in">
            <div v-if="products?.length">
                <DataView  :value="products?.length > 2 ? products : fakeproducts" :layout="layout">
                <template #header>
                    <div class="flex justify-between items-center ">
                        <div class="flex gap-2">
                            <Icon @click="show_menu = true" name="mdi:menu" size="24" color="black" />
                            <p>Sort by</p>
                        </div>
                        <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                            <template #option="{ option }">
                                <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                            </template>
                        </SelectButton>
                    </div>
                </template>
    
                <template #list="slotProps">
                    <div class="flex flex-col">
                        <div v-for="(item, index) in slotProps.items" :key="index">
                            <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                                <div class="md:w-40 relative">
                                    <img class="rounded w-full" :src="item.image" :alt="item.name" />
                                    <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px"></Tag>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                                    <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                        <div>
                                            <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
                                            <div class="text-lg font-medium mt-2">{{ item.name }}</div>
                                        </div>
                                        <div class="bg-surface-100 p-1" style="border-radius: 30px">
                                            <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                <span class="text-surface-900 font-medium text-sm">{{ item.rating?.rate }}</span>
                                                <i class="pi pi-star-fill text-yellow-500"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col md:items-end gap-8">
                                        <span class="text-xl font-semibold">${{ item.price }}</span>
                                        <div class="flex flex-row-reverse md:flex-row gap-2">
                                            <Button icon="pi pi-heart" outlined></Button>
                                            <Button icon="pi pi-shopping-cart" @click="()=>{
                                                navigateTo(`/products/${item?.id}`)
                                            }" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
    
                <template #grid="slotProps">
                    <div class="grid grid-cols-12 gap-4">
                        <div v-for="(item, index) in slotProps.items" :key="index" class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-4 p-2">
                            <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
                                <div class="bg-surface-50 flex justify-center rounded p-4">
                                    <div class="relative mx-auto">
                                        <img class="rounded w-[200px] h-[180px]" :src="item.image" :alt="item.title" style="max-width: 300px"/>
                                        <Tag :value="item.inventoryStatus" :severity="getSeverity(item)" class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px"></Tag>
                                    </div>
                                </div>
                                <div class="pt-6">
                                    <div class="flex flex-row justify-between items-start gap-2">
                                        <div>
                                            <span class="font-medium text-surface-500 dark:text-surface-400 text-[12px]">{{ item.category }}</span>
                                            <div class="text-[14px] h-[60px] font-medium mt-1">{{ item.title }}</div>
                                        </div>
                                        <div class="bg-surface-100 p-1" style="border-radius: 30px">
                                            <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                <span class="text-surface-900 font-medium text-[12px]">{{ item.rating?.rate }}</span>
                                                <i class="pi pi-star-fill text-yellow-500"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-6 mt-6">
                                        <span class="text-xl font-semibold">${{ item.price }}</span>
                                        <div class="flex gap-2">
                                            <Button icon="pi pi-shopping-cart" @click="()=>{
                                                navigateTo(`/products/${item?.id}`)
                                            }" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto whitespace-nowrap text-[14px]"></Button>
                                            <Button icon="pi pi-heart" outlined></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                </DataView>
            </div>
            <div v-else>
                <DataView  :value="products?.length > 2 ? products : fakeproducts" :layout="layout">
                <template #header>
                    <div class="flex justify-end">
                        <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                            <template #option="{ option }">
                                <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                            </template>
                        </SelectButton>
                    </div>
                </template>
    
                <template #list>
                    <div class="flex flex-col">
                        <div v-for="i in 6" :key="i">
                            <div class="flex flex-col xl:flex-row xl:items-start p-6 gap-6" :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 0 }">
                                <Skeleton class="!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto" />
                                <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-6">
                                    <div class="flex flex-col items-center sm:items-start gap-4">
                                        <Skeleton width="8rem" height="2rem" />
                                        <Skeleton width="6rem" height="1rem" />
    
                                        <div class="flex items-center gap-4">
                                            <Skeleton width="6rem" height="1rem" />
                                            <Skeleton width="3rem" height="1rem" />
                                        </div>
                                    </div>
                                    <div class="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
                                        <Skeleton width="4rem" height="2rem" />
                                        <Skeleton size="3rem" shape="circle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
    
                <template #grid>
                    <div class="grid grid-cols-12 gap-4">
                        <div v-for="i in 6" :key="i" class="col-span-12 sm:col-span-6 xl:col-span-4 p-2">
                            <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded">
                                <div class="flex flex-wrap items-center justify-between gap-2">
                                    <Skeleton width="6rem" height="2rem" />
                                    <Skeleton width="3rem" height="1rem" />
                                </div>
                                <div class="flex flex-col items-center gap-4 py-8">
                                    <Skeleton width="75%" height="10rem" />
                                    <Skeleton width="8rem" height="2rem" />
                                    <Skeleton width="6rem" height="1rem" />
                                </div>
                                <div class="flex items-center justify-between">
                                    <Skeleton width="4rem" height="2rem" />
                                    <Skeleton width="6rem" height="1rem" shape="circle" size="3rem" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                </DataView>
            </div>
        </transition>
        </div>
        <div v-if="show_menu" class="fixed z-30 top-0 left-0 w-full bg-white sm:bg-transparent sm:static col-span-1 lg:pt-16">
            <div class="flex flex-col p-4 border-gray-200 border rounded-xl gap-4">
                <p class="text-[20px] font-Righteous-Regular">Filters</p>
                <div class="flex flex-col gap-4">
                    <div @click="show_price = !show_price" class="flex items-center cursor-pointer justify-between">
                     <p  class="text-[16px] cursor-pointer text-Secondry font-Righteous-Regular">Price</p>
                        <Icon name="formkit:down" size="20" color="black" />
                    </div>
                    <transition name="page">
                        <div v-if="show_price" class="card flex justify-center flex-col">
                        <InputText v-model.number="value[0]" class="w-full text-[12px] border-b mb-4" />
                        <InputText v-model.number="value[1]" class="w-full text-[12px] border-b mb-4" />
                        <Slider v-model="value" range class="w-[90%] mx-auto" />
                        </div>
                    </transition>
                    <div @click="show_catagory = !show_catagory" class="flex cursor-pointer items-center justify-between">
                        <p  class="text-[16px] cursor-pointer text-Secondry font-Righteous-Regular">Catagory</p>
                        <Icon name="formkit:down" size="20" color="black" />
                    </div>
                    <transition name="page">
                        <div v-if="show_catagory" class="card p-1 gap-1 cursor-pointer text-[14px] text-gray-500 font-Righteous-Regular flex justify-center flex-col">
                            <p @click="navigateTo('/products/clothing/mens_clothing')">man's clothing</p>
                            <p @click="navigateTo('/products/clothing/womens_clothing')">women's clothing</p>
                            <p @click="navigateTo('/products/ornaments/jewelery')">jewelery</p>
                            <p @click="navigateTo('/products/electronic/electronic')">electronics</p>
                        </div>
                    </transition>
                </div>
            </div>     
        </div>
    </div>
</template>

<script setup>
import { useloginStore } from "~/store/auth";
const props = defineProps(['ider'])
const loginstore = useloginStore()
const products = computed(()=> {
    if(loginstore.fetchdatas ?.length > 2){
        return loginstore.fetchdatas.filter((m) =>  m.price < Number(high_price.value) && m.price > Number(low_price.value) )
    }
})
const fakeproducts = computed(()=> [
    {
    title : 'blank',
    id : 4,
    price : 4
    },
    {
    title : 'blank',
    id : 4,
    price : 4
    },
    {
    title : 'blank',
    id : 4,
    price : 4
    },
])

const loading = computed(()=>loginstore.loadings);
const show_price = ref(false)
const show_menu = ref(false)
const show_catagory = ref(false)
const productsfake = ref();
const value = ref([0, 100]);
const low_price = computed(()=> value.value[0])
const high_price = computed(()=> value.value[1])
const layout = ref('grid');
const options = ref(['list', 'grid']);
onMounted(() => {
    Promise.all([loginstore.fetch(props.ider)])
});
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}

</script>
