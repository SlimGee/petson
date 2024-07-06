<template>
    <NuxtLink class="p-4" :to="`/products/${product.uuid}`">
        <div class="group relative w-64 hover:shadow-md rounded p-4">
            <div
                class="aspect-h-1 h-48 aspect-w-1 w-full overflow-hidden bg-white lg:aspect-none group-hover:opacity-75 lg:h-80"
            >
                <img
                    :src="`https://pet-shop.buckhill.com.hr/api/v1/file/${product.metadata.image}`"
                    alt="Front of men&#039;s Basic Tee in black."
                    class="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-gray-700">
                        <a href="#">
                            <span
                                aria-hidden="true"
                                class="absolute inset-0"
                            ></span>
                            Basic Tee
                        </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
    product: Product;
}>();
</script>

<style></style>
