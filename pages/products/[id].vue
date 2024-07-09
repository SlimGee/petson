<template>
    <div class="font-sans">
        <div class="p-4 lg:max-w-5xl max-w-lg mx-auto">
            <div class="flex items-center gap-6">
                <div class="w-7/12 lg:sticky top-0 sm:flex gap-2">
                    <img
                        :src="`https://pet-shop.buckhill.com.hr/api/v1/file/${product.metadata.image}`"
                        alt="Product"
                        class="w-4/5 rounded-md object-cover"
                    />
                </div>

                <div class="w-5/12">
                    <h2 class="text-4xl font-bold text-gray-700">
                        {{ product.brand.title }}
                    </h2>
                    <h3 class="text-3xl font-bold text-gray-500">
                        {{ product.title }}
                    </h3>
                    <div class="flex flex-wrap gap-4 mt-4">
                        <p class="text-gray-700 text-5xl font-medium">
                            {{ product.price }}kn
                        </p>
                    </div>

                    <div class="flex items-center space-x-2 w-7/12 mt-8">
                        <div class="w-8/12">
                            <button
                                @click="addToCart"
                                type="button"
                                class="w-full px-6 uppercase py-3 bg-default hover:bg-default/80 text-white text-sm font-semibold rounded"
                            >
                                <BootstrapIcon name="cart-fill" />
                                Add to cart
                            </button>
                        </div>
                        <div class="flex space-x-2 w-2/12">
                            <button
                                @click="sub"
                                class="px-6 uppercase py-3 bg-gray-200 hover:bg-default/80 text-gray-700 text-sm font-semibold rounded"
                            >
                                -
                            </button>
                            <input
                                type="text"
                                class="border rounded border-gray-200 w-12"
                                v-model="quantity"
                            />
                            <button
                                @click="add"
                                class="px-6 uppercase py-3 bg-gray-200 hover:bg-default/80 text-gray-700 text-sm font-semibold rounded"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8 prose" v-html="product.description"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
const { data: product } = await useFetch<any>(
    `https://pet-shop.buckhill.com.hr/api/v1/product/${id}`,
    {
        transform: (payload) => {
            return payload.data;
        },
    }
);

const quantity = ref(1);

const add = () => {
    if (quantity.value < product.value.quantity) {
        quantity.value++;
    }
};

const sub = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};
const { addItem, getItem } = useCartStore();

const addToCart = () => {
    addItem(product.value);
};
</script>

<style></style>
