<template>
    <div>
        <div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                Type of payment
            </h2>
        </div>

        <TabGroup>
            <TabList>
                <Tab v-slot="{ selected }" key="cc">
                    <span
                        type="button"
                        :class="[
                            'py-4 px-10 flex flex-col shadow rounded',
                            selected ? 'bg-gray-100' : 'bg-white',
                        ]"
                    >
                        <UIcon
                            :class="[
                                'text-8xl',
                                selected ? 'text-default' : 'text-default/30',
                            ]"
                            name="i-heroicons-credit-card"
                        />
                        <span class="font-semibold text-gray-800"
                            >Credit card</span
                        >
                    </span>
                </Tab>

                <Tab v-slot="{ selected }" key="bts">
                    <span
                        type="button"
                        :class="[
                            'py-4 px-10 flex flex-col shadow rounded',
                            selected ? 'bg-gray-100' : 'bg-white',
                        ]"
                    >
                        <UIcon
                            :class="[
                                'text-8xl',
                                selected ? 'text-default' : 'text-default/30',
                            ]"
                            name="i-heroicons-arrows-right-left"
                        />
                        <span class="font-semibold text-gray-800"
                            >Bank transfer</span
                        >
                    </span>
                </Tab>

                <Tab v-slot="{ selected }" key="bt">
                    <span
                        type="button"
                        :class="[
                            'py-4 px-10 flex flex-col shadow rounded',
                            selected ? 'bg-gray-100' : 'bg-white',
                        ]"
                    >
                        <UIcon
                            :class="[
                                'text-8xl',
                                selected ? 'text-default' : 'text-default/30',
                            ]"
                            name="i-heroicons-arrows-right-left"
                        />
                        <span class="font-semibold text-gray-800"
                            >Bank transfer</span
                        >
                    </span>
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <div>
                        <h2
                            class="text-xl font-semibold text-gray-900 dark:text-white"
                        >
                            Card details
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div class="col-span-2">
                            <UFormGroup label="Card number*" name="card_number">
                                <UInput />
                            </UFormGroup>
                        </div>

                        <UFormGroup label="Expiry date*" name="expiry_date">
                            <UInput />
                        </UFormGroup>
                        <UFormGroup label="CVV*" name="cvv">
                            <UInput />
                        </UFormGroup>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div>
                        <h2
                            class="text-xl font-semibold text-gray-900 dark:text-white"
                        >
                            Cash on delivery
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <UFormGroup label="First name" name="card_number">
                            <UInput />
                        </UFormGroup>
                        <UFormGroup label="Last name" name="card_number">
                            <UInput />
                        </UFormGroup>
                        <div class="col-span-2">
                            <UFormGroup
                                label="Address line 1*"
                                name="expiry_date"
                            >
                                <UInput />
                            </UFormGroup>
                        </div>
                        <div class="col-span-2">
                            <UFormGroup
                                label="Address line 2"
                                name="expiry_date"
                            >
                                <UInput />
                            </UFormGroup>
                        </div>

                        <UFormGroup label="CVV*" name="cvv">
                            <UCheckbox
                                v-model="state.use_as_shipping"
                                label="I conset to your T&C's"
                            />
                        </UFormGroup>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div>
                        <h2
                            class="text-xl font-semibold text-gray-900 dark:text-white"
                        >
                            Bank transfer
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div class="col-span-2">
                            <UFormGroup
                                label="Bank SWIFT code*"
                                name="expiry_date"
                            >
                                <UInput />
                            </UFormGroup>
                        </div>

                        <UFormGroup label="IBAN*" name="card_number">
                            <UInput />
                        </UFormGroup>
                        <UFormGroup label="Name*" name="card_number">
                            <UInput />
                        </UFormGroup>
                        <div class="col-span-2">
                            <UFormGroup label="Ref code *" name="expiry_date">
                                <UInput />
                            </UFormGroup>
                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>
<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
</script>
