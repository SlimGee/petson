<template>
    <div class="flex items-center gap-4">
        <div class="w-40 h-48 shrink-0 bg-white shadow p-2 rounded-md">
            <NuxtImg
                :src="item.product.metadata.image"
                provider="buckhill"
                class="w-full h-full object-contain"
            />
        </div>

        <div class="w-full">
            <h3 class="text-lg font-semibold text-gray-800">
                {{ item.product.title }}
            </h3>
            <h3 class="text-sm font-semibold text-gray-600">
                {{ item.product.brand.title }}
            </h3>

            <h6 class="text-xl text-gray-800 font-medium cursor-pointer mt-0.5">
                {{ item.product.price }}
            </h6>

            <div class="flex gap-4 mt-4">
                <div>
                    <div class="flex space-x-2 w-2/12">
                        <button
                            @click="quantity--"
                            class="px-2 uppercase py-1.5 bg-gray-200 hover:bg-default/80 text-gray-700 text-sm font-semibold rounded"
                        >
                            -
                        </button>
                        <input
                            type="text"
                            class="border rounded border-gray-200 w-8 !py-1 px-3 text-xs"
                            v-model="quantity"
                        />
                        <button
                            @click="quantity++"
                            class="px-2 uppercase py-1.5 bg-gray-200 hover:bg-default/80 text-gray-700 text-sm font-semibold rounded"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div class="">
                    <button
                        @click="removeItem(item.product.uuid)"
                        class="uppercase text-xs px-2 py-1 rounded border font-semibold border-amber-600 text-amber-600"
                    >
                        <BootstrapIcon name="cart-x" />
                        Remove from cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { item } = defineProps<{
    item: CartItem;
}>();

const quantity = ref(item.quantity);
const { addItem, removeItem } = useCartStore();

watch(quantity, () => {
    const toAdd = quantity.value - item.quantity;
    if (item.quantity + toAdd >= 1) {
        addItem(item.product, toAdd);
    } else {
        quantity.value = item.quantity;
    }
});
</script>
