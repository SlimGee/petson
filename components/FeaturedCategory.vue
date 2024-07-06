<template>
    <div class="max-w-6xl mx-auto py-16">
        <div>
            <h2 class="font-medium text-3xl text-default">
                {{ category.title }}
            </h2>
        </div>
        <div class="my-10">
            <carousel :items-to-show="4">
                <slide v-for="product in products" :key="product.uuid">
                    <Product :product="product" />
                </slide>

                <template #addons>
                    <navigation />
                </template>
            </carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
const { categories } = defineProps<{
    categories: Category[];
}>();

const category: Category =
    categories[Math.floor(Math.random() * categories.length)];

const { data } = await useFetch<any>(
    `https://pet-shop.buckhill.com.hr/api/v1/products?category=${category.uuid}`
);
const products: Product[] = data.value.data;
</script>

<style></style>
