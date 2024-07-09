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
                    <span class="w-6 h-6 rounded-full bg-gray-400 text-white">
                        1
                    </span>
                    <span> Shipping address </span>
                </li>
                <li class="h-px w-full bg-gray-400"></li>

                <li class="flex space-x-1 shrink-0 items-center">
                    <span class="w-6 h-6 rounded-full bg-default text-white">
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
                            Payment Details
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
                                <UFormGroup name="use_as_shipping">
                                    <UCheckbox
                                        v-model="state.use_as_shipping"
                                        label="Use this address for shipping details"
                                    />
                                </UFormGroup>
                            </div>
                        </div>

                        <div>
                            <h2
                                class="text-xl font-semibold text-gray-900 dark:text-white"
                            >
                                Type of payment
                            </h2>
                        </div>

                        <TabGroup @change="changeTab">
                            <TabList class="space-x-3">
                                <Tab
                                    v-for="item in paymentTypes"
                                    :key="item.key"
                                    v-slot="{ selected }"
                                    :id="item.key"
                                >
                                    <span
                                        type="button"
                                        :class="[
                                            'py-4 px-8 flex flex-col shadow rounded',
                                            selected
                                                ? 'bg-gray-100'
                                                : 'bg-white',
                                        ]"
                                    >
                                        <UIcon
                                            :class="[
                                                'text-8xl',
                                                selected
                                                    ? 'text-default'
                                                    : 'text-default/30',
                                            ]"
                                            :name="item.icon"
                                        />
                                        <span
                                            class="font-semibold text-gray-800"
                                        >
                                            {{ item.label }}
                                        </span>
                                    </span>
                                </Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel id="121">
                                    <div>
                                        <h2
                                            class="text-xl font-semibold text-gray-900 dark:text-white"
                                        >
                                            Card details
                                        </h2>
                                    </div>

                                    <div
                                        class="grid grid-cols-1 gap-4 sm:grid-cols-2"
                                    >
                                        <div class="col-span-2">
                                            <UFormGroup
                                                label="Card number*"
                                                name="card_number"
                                            >
                                                <UInput
                                                    v-model="
                                                        payment.details
                                                            .card_number
                                                    "
                                                />
                                            </UFormGroup>
                                        </div>

                                        <UFormGroup
                                            label="Expiry date*"
                                            name="expiry_date"
                                        >
                                            <UInput
                                                v-model="
                                                    payment.details.expiry_date
                                                "
                                            />
                                        </UFormGroup>
                                        <UFormGroup label="CVV*" name="cvv">
                                            <UInput
                                                v-model="payment.details.cvv"
                                            />
                                        </UFormGroup>
                                    </div>
                                </TabPanel>

                                <TabPanel id="1234">
                                    <div>
                                        <h2
                                            class="text-xl font-semibold text-gray-900 dark:text-white"
                                        >
                                            Cash on delivery
                                        </h2>
                                    </div>

                                    <div
                                        class="grid grid-cols-1 gap-4 sm:grid-cols-2"
                                    >
                                        <UFormGroup label="First name">
                                            <UInput
                                                v-model="
                                                    payment.details.first_name
                                                "
                                            />
                                        </UFormGroup>
                                        <UFormGroup label="Last name">
                                            <UInput
                                                v-model="
                                                    payment.details.last_name
                                                "
                                            />
                                        </UFormGroup>
                                        <div class="col-span-2">
                                            <UFormGroup label="Address line 1*">
                                                <UInput
                                                    v-model="
                                                        payment.details.address1
                                                    "
                                                />
                                            </UFormGroup>
                                        </div>
                                        <div class="col-span-2">
                                            <UFormGroup
                                                label="Address line 2"
                                                name="expiry_date"
                                            >
                                                <UInput
                                                    v-model="
                                                        payment.details.address2
                                                    "
                                                />
                                            </UFormGroup>
                                        </div>

                                        <UFormGroup label="CVV*" name="cvv">
                                            <UCheckbox
                                                v-model="
                                                    payment.details.consent
                                                "
                                                label="I consent to your T&C's"
                                            />
                                        </UFormGroup>
                                    </div>
                                </TabPanel>

                                <TabPanel id="6463">
                                    <div>
                                        <h2
                                            class="text-xl font-semibold text-gray-900 dark:text-white"
                                        >
                                            Bank transfer
                                        </h2>
                                    </div>

                                    <div
                                        class="grid grid-cols-1 gap-4 sm:grid-cols-2"
                                    >
                                        <div class="col-span-2">
                                            <UFormGroup
                                                label="Bank SWIFT code*"
                                                name="expiry_date"
                                            >
                                                <UInput
                                                    v-model="
                                                        payment.details
                                                            .swift_code
                                                    "
                                                />
                                            </UFormGroup>
                                        </div>

                                        <UFormGroup
                                            label="IBAN*"
                                            name="card_number"
                                        >
                                            <UInput
                                                v-model="payment.details.iban"
                                            />
                                        </UFormGroup>
                                        <UFormGroup
                                            label="Name*"
                                            name="card_number"
                                            v-model="payment.details.name"
                                        >
                                            <UInput />
                                        </UFormGroup>
                                        <div class="col-span-2">
                                            <UFormGroup
                                                label="Ref code *"
                                                name="expiry_date"
                                                v-model="
                                                    payment.details.ref_code
                                                "
                                            >
                                                <UInput />
                                            </UFormGroup>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
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
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';

definePageMeta({
    middleware: ['auth'],
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

const { setBillingDetails, billing, payment } = useCheckoutStore();

const state = billing;
const router = useRouter();

const paymentTypes = [
    {
        label: 'Credit card',
        key: 'credit_card',
        icon: 'i-heroicons-credit-card',
    },
    {
        label: 'Cash on delivery',
        key: 'cash_on_delivery',
        icon: 'i-heroicons-banknotes',
    },
    {
        label: 'Bank transfer',
        key: 'bank_transfer',
        icon: 'i-heroicons-arrows-right-left',
    },
];
payment.type = 'credit_card';

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    router.push('/checkout/summary');
};

const changeTab = (index: number) => {
    payment.type = paymentTypes[index].key;
};
</script>
