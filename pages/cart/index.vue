<template>
    <div class="mx-auto max-w-2xl">
        <ol class="flex items-center whitespace-nowrap py-6">
            <li class="inline-flex items-center">
                <a
                    class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                    href="#"
                >
                    Home
                </a>
                <svg
                    class="flex-shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M6 13L10 3"
                        stroke="currentColor"
                        stroke-linecap="round"
                    ></path>
                </svg>
            </li>

            <li
                class="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
                aria-current="page"
            >
                Your Cart
            </li>
        </ol>
        <h2 class="text-6xl font-medium tracking-tight text-default">
            Your Cart
        </h2>

        <div>
            <div class="mt-6 rounded-md">
                <div class="space-y-4 mt-8">
                    <CartItem
                        v-for="item in items"
                        :item="item"
                        :key="item.product.uuid"
                    />
                </div>
            </div>
        </div>

        <div class="mt-8">
            <NuxtLink to="/checkout">
                <button
                    class="uppercase w-full text-xs px-3 py-2.5 rounded border font-semibold bg-default text-white"
                >
                    Poceed to checkout
                </button>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { items } = useCartStore();
</script>
