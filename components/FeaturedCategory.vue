<template>
    <div class="max-w-6xl mx-auto py-16">
        <div>
            <NuxtLink :to="`/categories/${category.uuid}`">
                <h2 class="font-medium text-3xl text-default">
                    {{ category.title }}
                </h2>
            </NuxtLink>
        </div>
        <div class="my-10">
            <carousel :items-to-show="4">
                <slide
                    v-for="product in products"
                    :key="product.uuid"
                    :id="product.uuid"
                >
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

const category: Category = categories[0];

const { data } = await useFetch<any>(
    `https://pet-shop.buckhill.com.hr/api/v1/products?category=${category.uuid}`
);
const products: Product[] = data?.value?.data;
</script>

<style></style>
