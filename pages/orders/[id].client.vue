<template>
    <!-- Invoice -->
    <div class="w-full px-4 mx-auto my-4 "  
>
        <div class="sm:w-full mx-auto">
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
                Your Order
            </li>
        </ol>
        <h1 class="text-6xl font-medium tracking-tight text-default">
            Your Order
        </h1>


            <div class="mt-6 flex justify-end gap-x-3">
                <button
                    class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    @click="downloadInvoice"
                >
                    <svg
                        class="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Invoice PDF
                </button>
            </div>
                        <!-- Card -->
            <div ref="invoice"
                               class="flex flex-col p-4 sm:p-10 bg-white shadow-sm border rounded-xl dark:bg-neutral-800 my-4 sm:my-10"
            >
                <!-- Grid -->
                <div class="flex justify-between">
                    <div>
                        <div
                            class="mx-auto flex flex-col justify-center items-center p-3 bg-default text-white rounded-full text-center"
                        >
                            <Logo />
                            <span class="font-semibold">Petson.</span>
                        </div>
                    </div>
                    <!-- Col -->

                    <div class="text-end">
                        <h2
                            class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-neutral-200"
                        >
                            Invoice #
                        </h2>
                        <span
                            class="mt-1 block text-gray-500 dark:text-neutral-500"
                            >{{ order.uuid }}</span
                        >

                        <div class="sm:text-end space-y-2 mt-8">
                            <!-- Grid -->
                            <div
                                class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2"
                            >
                                <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt
                                        class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200"
                                    >
                                        Invoice date:
                                    </dt>
                                    <dd
                                        class="col-span-2 text-gray-500 dark:text-neutral-500"
                                    >
                                        {{
                                            moment(order.created_at).format(
                                                'MMMM D, YYYY'
                                            )
                                        }}
                                    </dd>
                                </dl>
                            </div>
                            <!-- End Grid -->
                        </div>
                    </div>
                    <!-- Col -->
                </div>
                <!-- End Grid -->

                <!-- Grid -->
                <div class="mt-8 grid sm:grid-cols-2 gap-3">
                    <div>
                        <h3
                            class="text-lg font-semibold text-gray-800 dark:text-neutral-200"
                        >
                            {{ order.user.first_name }}
                            {{ order.user.last_name }}
                        </h3>
                        <div
                            class="mt-2 not-italic text-gray-500 dark:text-neutral-500"
                        >
                            {{ order.user.email }}
                        </div>
                        <div
                            class="mt-2 not-italic text-gray-500 dark:text-neutral-500"
                        >
                            {{ order.user.phone_number }}
                        </div>

                        <address
                            class="mt-2 not-italic text-gray-500 dark:text-neutral-500"
                        >
                            {{ order.user.address }}
                        </address>
                    </div>

                    <div class="sm:text-end space-y-2">
                        <h3
                            class="text-lg font-semibold text-gray-800 dark:text-neutral-200"
                        >
                            Billing/Shipping Address:
                        </h3>
                        <div
                            class="mt-2 not-italic text-gray-500 dark:text-neutral-500"
                        >
                            {{ order.address.billing }}
                        </div>
                        <div
                            class="mt-2 not-italic text-gray-500 dark:text-neutral-500"
                        >
                            {{ order.address.shipping }}
                        </div>
                    </div>

                    <!-- Col -->

                    <!-- Col -->
                </div>
                <!-- End Grid -->

                <!-- Table -->
                <div class="mt-6">
                    <div
                        class="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700"
                    >
                        <div class="hidden sm:grid sm:grid-cols-12">
                            <div
                                class="sm:col-span-4 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                            >
                                ID
                            </div>

                            <div
                                class="sm:col-span-5 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                            >
                                Item
                            </div>
                            <div
                                class="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                            >
                                Qty
                            </div>
                            <div
                                class="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                            >
                                Unit Price
                            </div>
                            <div
                                class="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                            >
                                Price
                            </div>
                        </div>

                        <div
                            class="hidden sm:block border-b border-gray-200 dark:border-neutral-700"
                        ></div>

                        <div
                            v-for="item, index in order.products"
                            :key="item.uuid"
                                                    >
                        <div class="grid grid-cols-3 sm:grid-cols-12 gap-2">

                                                    <div class="col-span-full sm:col-span-4">
                                <h5
                                    class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                >
                                    ID
                                </h5>
                                <p
                                    class="font-medium text-gray-800 dark:text-neutral-200"
                                >
                                    {{ item.uuid }}
                                </p>
                            </div>

                            <div class="col-span-full sm:col-span-5">
                                <h5
                                    class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                >
                                    Item
                                </h5>
                                <p
                                    class="font-medium text-gray-800 dark:text-neutral-200"
                                >
                                    {{ item.product }}
                                </p>
                            </div>
                            <div>
                                <h5
                                    class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                >
                                    Qty
                                </h5>
                                <p class="text-gray-800 dark:text-neutral-200">
                                    {{ item.quantity }}
                                </p>
                            </div>
                            <div>
                                <h5
                                    class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                >
                                    Rate
                                </h5>
                                <p class="text-gray-800 dark:text-neutral-200">
                                    {{ item.price }}
                                </p>
                            </div>
                            <div>
                                <h5
                                    class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                >
                                    Amount
                                </h5>
                                <p
                                    class="sm:text-end text-gray-800 dark:text-neutral-200"
                                >
                                    ${{
                                        Number(
                                            item.price * item.quantity
                                        ).toFixed(2)
                                    }}
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Table -->

                <!-- Flex -->
                <div class="mt-8 flex sm:justify-end">
                    <div class="w-full max-w-2xl sm:text-end space-y-2">
                        <!-- Grid -->
                        <div
                            class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2"
                        >
                            <dl class="grid sm:grid-cols-5 gap-x-3">
                                <dt
                                    class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200"
                                >
                                    Subtotal:
                                </dt>
                                <dd
                                    class="col-span-2 text-gray-500 dark:text-neutral-500"
                                >
                                    ${{ order.amount }}
                                </dd>
                            </dl>
                            <dl class="grid sm:grid-cols-5 gap-x-3">
                                <dt
                                    class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200"
                                >
                                    Delivery fee:
                                </dt>
                                <dd
                                    class="col-span-2 text-gray-500 dark:text-neutral-500"
                                >
                                    ${{ order.delivery_fee }}
                                </dd>
                            </dl>

                            <dl class="grid sm:grid-cols-5 gap-x-3">
                                <dt
                                    class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200"
                                >
                                    Total:
                                </dt>
                                <dd
                                    class="col-span-2 text-gray-500 dark:text-neutral-500"
                                >
                                    ${{ order.amount + order.delivery_fee }}
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div class="mt-8 sm:mt-12">
                    <h4
                        class="text-lg font-semibold text-gray-800 dark:text-neutral-200"
                    >
                        Thank you!
                    </h4>
                    <p class="text-gray-500 dark:text-neutral-500">
                        If you have any questions concerning this invoice, use
                        the following contact information:
                    </p>
                    <div class="mt-2">
                        <p
                            class="block text-sm font-medium text-gray-800 dark:text-neutral-200"
                        >
                            contact@petson.com
                        </p>
                        <p
                            class="block text-sm font-medium text-gray-800 dark:text-neutral-200"
                        >
                            +385 000 000
                        </p>
                    </div>
                </div>

                <p class="mt-5 text-sm text-gray-500 dark:text-neutral-500">
                    &copy; {{ new Date().getFullYear() }} Petson.
                </p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import html2pdf from 'html2pdf.js'

const { loadOrder } = useOrder();
const { id } = useRoute().params;

const { data: response }: any = await loadOrder(id as string);
const order = ref(response.value.data);

const invoice = ref()

const downloadInvoice = () => {
html2pdf().set({
            margin: 1.5,
            filename: `${order.value.uuid}.pdf`,
             jsPDF: { unit: 'in', format: 'a1', orientation: 'portrait', },
        })
        .from(invoice.value)
        .toPdf()
        .save()}
</script>
