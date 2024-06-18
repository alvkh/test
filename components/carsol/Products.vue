
<template>
    <div class="card">
        <Carousel v-if="products" :value="products?.length > 4 ? products : fakeproducts" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative">
                            <img :src="slotProps.data.image" :alt="slotProps.data.title" class="w-[150px] h-[200px] rounded mx-auto" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-4 h-[70px] font-medium">{{ slotProps.data.title }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" @click="()=>{
                                navigateTo(`/products/${slotProps.data.id}`)
                            }" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
        <Carousel v-else :value="fakeproducts" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative">
                            <Skeleton class="!w-9/12 sm:!w-64 xl:!w-40 !h-[200px] mx-auto" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <Skeleton width="6rem" height="1rem" />
                    <div class="flex justify-between items-center">
                        <Skeleton width="6rem" height="1rem" />
                        <span>
                            <Skeleton width="6rem" height="1rem" />
                            <Skeleton width="6rem" height="1rem" />
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { useloginStore } from "~/store/auth";
const props = defineProps(['ider'])
const loginstore = useloginStore()
onMounted(() => {
    Promise.all([loginstore.fetch('?limit=5')])
});
const products = computed(()=> loginstore.fetchdatas)
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

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

</script>
