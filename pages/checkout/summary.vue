<template>
    <section
        class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 max-w-xl mx-auto"
    >
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h1 class="text-5xl font-medium tracking-tight text-default mb-8">
                Checkout
            </h1>

            <ol
                class="items-center flex w-full max-w-2xl space-x-3 text-center text-sm font-medium text-gray-500 sm:text-base"
            >
                <li class="flex space-x-1 shrink-0 items-center">
                    <span class="w-6 h-6 rounded-full bg-gray-400 text-white">
                        1
                    </span>
                    <span> Shipping address </span>
                </li>
                <li class="h-px w-full bg-gray-400"></li>

                <li class="flex space-x-1 shrink-0 items-center">
                    <span class="w-6 h-6 rounded-full bg-gray-400 text-white">
                        3
                    </span>
                    <span> Payment details </span>
                </li>

                <li class="h-px w-full bg-gray-400"></li>

                <li class="flex space-x-1 shrink-0 items-center">
                    <span class="w-6 h-6 rounded-full bg-default text-white">
                        3
                    </span>
                    <span> Review your order </span>
                </li>
            </ol>
            <div class="my-16">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Review your order
                </h2>
            </div>

            <div class="my-16">
                <div
                    class="flex justify-between items-center bg-gray-100 px-2 py-1"
                >
                    <div
                        class="text-lg font-semibold text-gray-700 dark:text-white"
                    >
                        Shipping address
                    </div>
                    <UButton variant="link" to="/checkout">Edit</UButton>
                </div>

                <div class="px-2 mt-2">
                    <span class="font-semibold">
                        {{ shipping.first_name }}
                        {{ shipping.last_name }}
                    </span>
                    <p>{{ shipping.address1 }}</p>
                    <p>{{ shipping.address2 }}</p>
                    <p>{{ shipping.city }}, {{ shipping.state }}</p>
                    <p>{{ shipping.postcode }}, {{ shipping.country }}</p>
                </div>
            </div>

            <div class="my-16">
                <div
                    class="flex justify-between items-center bg-gray-100 px-2 py-1"
                >
                    <div
                        class="text-lg font-semibold text-gray-700 dark:text-white"
                    >
                        Payment details
                    </div>
                    <UButton variant="link" to="/checkout/payment"
                        >Edit</UButton
                    >
                </div>

                <div class="px-2 mt-2">
                    <span class="font-semibold">
                        {{ billing.first_name }}
                        {{ billing.last_name }}
                    </span>
                    <p>{{ billing.address1 }}</p>
                    <p>{{ billing.address2 }}</p>
                    <p>{{ billing.city }}, {{ billing.state }}</p>
                    <p>{{ billing.postcode }}, {{ billing.country }}</p>
                    <div class="w-full border-b my-5"></div>
                    <div class="font-semibold text-lg text-gray-700">
                        Type of payment
                    </div>
                    <p class="text-gray-600">{{ startCase(payment.type) }}</p>
                </div>
            </div>

            <div class="my-16">
                <div
                    class="flex justify-between items-center bg-gray-100 px-2 py-1"
                >
                    <div
                        class="text-lg font-semibold text-gray-700 dark:text-white"
                    >
                        Your order
                    </div>
                    <UButton variant="link" to="/cart">Edit</UButton>
                </div>

                <div class="px-2 mt-8">
                    <div
                        v-for="item in items"
                        :key="item.product.uuid"
                        class="flex items-center gap-4"
                    >
                        <div
                            class="w-28 h-32 shrink-0 bg-white shadow p-2 rounded-md"
                        >
                            <NuxtImg
                                :src="item.product.metadata.image"
                                provider="buckhill"
                                class="w-full h-full object-contain"
                            />
                        </div>

                        <div class="w-full">
                            <h3
                                class="text-base font-semibold text-gray-800 underline"
                            >
                                {{ item.product.title }}
                            </h3>
                            <h3 class="text-lg font-medium text-gray-600">
                                {{ item.product.brand.title }}
                            </h3>

                            <h6
                                class="text-xl text-gray-800 font-bold cursor-pointer mt-0.5"
                            >
                                {{ item.product.price }}
                            </h6>

                            <div class="flex gap-4 mt-4"></div>
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <button
                        @click="checkout"
                        class="uppercase w-full text-xs px-3 py-2.5 rounded border font-semibold bg-default text-white"
                    >
                        Place order
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { startCase } from 'lodash';
const { shipping, billing, payment } = useCheckoutStore();
const { items } = useCartStore();
const token = useCookie('token');

const { data, execute } = useAsyncData(
    async () => {
        const { data }: any = await $fetch(
            'https://pet-shop.buckhill.com.hr/api/v1/payment/create',
            {
                method: 'POST',
                body: payment,
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            }
        );
        const { data: statuses }: any = await $fetch(
            'https://pet-shop.buckhill.com.hr/api/v1/order-statuses'
        );
        const status = statuses.find((status: any) => status.title === 'paid');
        const { data: order }: any = await $fetch(
            'https://pet-shop.buckhill.com.hr/api/v1/order/create',
            {
                method: 'POST',
                body: {
                    products: items.map((item: CartItem) => ({
                        product: item.product.uuid,
                        quantity: item.quantity,
                    })),
                    address: {
                        shipping:
                            shipping.address1 +
                            ', ' +
                            shipping.city +
                            ', ' +
                            shipping.postcode +
                            ', ' +
                            shipping.country,
                        billing:
                            billing.address1 +
                            ', ' +
                            billing.city +
                            ', ' +
                            billing.postcode +
                            ', ' +
                            billing.country,
                    },
                    payment_uuid: data.uuid,
                    order_status_uuid: status.uuid,
                },
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            }
        );
    },
    { immediate: false }
);

const checkout = async () => {
    await execute();
    navigateTo('/');
};
</script>
