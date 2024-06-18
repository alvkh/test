<template>
       <Card>
        <template #title ></template>
        <template #content>
            <div class="flex gap-8 items-center">
                <Icon :name="props.icon" size="30" color="gray" />
                <div class="flex flex-col gap-1">
                    <slot />
                </div>
            </div>
            
        </template>
    </Card>
</template>
<script setup>
const props = defineProps(['icon'])
</script>