<template>
    <section
        class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 max-w-xl mx-auto"
    >
        <UForm
            :state="state"
            :schema="schema"
            @submit="onSubmit"
            class="mx-auto max-w-screen-xl px-4 2xl:px-0"
        >
            <h1 class="text-5xl font-medium tracking-tight text-default mb-8">
                Checkout
            </h1>

            <ol
                class="items-center flex w-full max-w-2xl space-x-3 text-center text-sm font-medium text-gray-500 sm:text-base"
            >
                <li class="flex space-x-1 shrink-0 items-center">
                    <span class="w-6 h-6 rounded-full bg-default text-white">
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
                    <span class="w-6 h-6 rounded-full bg-gray-400 text-white">
                        3
                    </span>
                    <span> Review your order </span>
                </li>
            </ol>

            <div
                class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16"
            >
                <div class="min-w-0 flex-1 space-y-8">
                    <div class="space-y-4">
                        <h2
                            class="text-xl font-semibold text-gray-900 dark:text-white"
                        >
                            Shipping address
                        </h2>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <UFormGroup label="First name*" name="first_name">
                                <UInput v-model="state.first_name" />
                            </UFormGroup>

                            <UFormGroup label="First name*" name="last_name">
                                <UInput v-model="state.last_name" />
                            </UFormGroup>
                            <div class="col-span-2">
                                <UFormGroup
                                    label="Address line 1*"
                                    name="address1"
                                >
                                    <UInput v-model="state.address1" />
                                </UFormGroup>
                            </div>
                            <div class="col-span-2">
                                <UFormGroup
                                    label="Address line 2"
                                    name="address2"
                                >
                                    <UInput v-model="state.address2" />
                                </UFormGroup>
                            </div>

                            <UFormGroup label="City*" name="city">
                                <UInput v-model="state.city" />
                            </UFormGroup>

                            <UFormGroup
                                label="State/Province/Region"
                                name="state"
                            >
                                <UInput v-model="state.state" />
                            </UFormGroup>

                            <UFormGroup
                                label="Zip/Postal code*"
                                name="postcode"
                            >
                                <UInput v-model="state.postcode" />
                            </UFormGroup>

                            <UFormGroup label="Country*" name="country">
                                <UInput v-model="state.country" />
                            </UFormGroup>
                            <div class="col-span-2">
                                <UFormGroup name="use_as_payment">
                                    <UCheckbox
                                        v-model="state.use_as_payment"
                                        label="Use this address for payment details"
                                    />
                                </UFormGroup>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-3 text-end">
                        <button
                            type="submit"
                            class="uppercase text-xs px-3 py-2.5 rounded border font-semibold bg-default text-white"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </UForm>
    </section>
</template>

<script setup lang="ts">
import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

definePageMeta({
    middleware: ['auth'],
    // or middleware: 'auth'
});

const schema = z.object({
    first_name: z.string().nonempty().trim(),
    last_name: z.string().nonempty().trim(),
    address1: z.string().nonempty(),
    address2: z.string().nullable().optional(),
    city: z.string().nonempty(),
    postcode: z.string().nonempty(),
    state: z.string().nullable(),
    country: z.string().nonempty(),
});

type Schema = z.output<typeof schema>;

const { setShippingDetails, shipping } = useCheckoutStore();

const state = reactive(shipping);
const router = useRouter();

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    setShippingDetails(state);
    router.push('/checkout/payment');
};
</script>
