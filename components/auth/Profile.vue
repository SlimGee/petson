<template>
    <UModal
        v-model="store.profile"
        :ui="{
            width: 'w-full sm:max-w-5xl',
        }"
    >
        <UCard class="pb-8">
            <div class="flex items-center justify-end">
                <UButton
                    color="gray"
                    variant="ghost"
                    icon="i-heroicons-x-mark-20-solid"
                    class="-my-1"
                    @click="close"
                />
            </div>
            <div class="flex justify-center mt-2 mb-4">
                <h2 class="font-medium text-lg">User settings</h2>
            </div>

            <div class="flex">
                <div class="border-r px-6">
                    <div
                        class="h-28 border border-default w-28 rounded-full bg-white text-default flex justify-center items-center font-bold text-lg"
                        v-if="!user?.avatar"
                    >
                        {{ user?.first_name[0] }}
                    </div>
                    <div v-else class="h-28 rounded-full w-28 overflow-hidden">
                        <NuxtImg
                            :src="user.avatar"
                            provider="buckhill"
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div class="px-6 flex-auto space-y-6">
                    <div class="flex justify-between w-full">
                        <div class="w-4/12">
                            <div class="text-sm text-gray-600">Name</div>
                            <div class="text-base">
                                {{ user.first_name }} {{ user.last_name }}
                            </div>
                        </div>
                        <div class="w-4/12">
                            <div class="text-sm text-gray-600">
                                Phone number
                            </div>
                            <div class="text-base">
                                {{ user.phone_number }}
                            </div>
                        </div>
                        <div class="w-4/12">
                            <div class="text-sm text-gray-600">Address</div>
                            <div class="text-base">
                                {{ user.address }}
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between w-full">
                        <div class="w-4/12">
                            <div class="text-sm text-gray-600">Date joined</div>
                            <div class="text-base">
                                {{
                                    moment(user.created_at).format('D. M. YYYY')
                                }}
                            </div>
                        </div>
                        <div class="w-4/12">
                            <div class="text-sm text-gray-600">Email</div>
                            <div class="text-base">
                                {{ user.email }}
                            </div>
                        </div>
                        <div class="w-4/12">
                            <div class="text-sm text-gray-600">
                                Marketing preferences
                            </div>
                            <div class="text-base">
                                {{ user.is_marketing ? 'Yes' : 'No' }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border mt-10 rounded shadow-sm">
                <div class="p-3 text-lg font-semibold text-gray-700">
                    Latest orders
                </div>
                <UTable :rows="orders" :columns="columns">
                    <template #download-header="{ column }">
                        <div class="flex justify-center">
                            {{ column.label }}
                        </div>
                    </template>

                    <template #download-data="{ row }">
                        <div class="flex justify-center space-x-3">
                            <UButton
                                color="gray"
                                @click="download(row.uuid)"
                                icon="i-heroicons-arrow-down-tray"
                            />
                            <UButton
                                :to="`/orders/${row.uuid}`"
                                icon="i-heroicons-eye"
                            />
                        </div>
                    </template>
                </UTable>
                <div
                    class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
                >
                    <UPagination
                        v-model="page"
                        :page-count="response.per_page"
                        :total="response.total"
                    />
                </div>
            </div>
        </UCard>
    </UModal>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import moment from 'moment';

const store = useAuthPages();
const { user} = storeToRefs(useAuthStore());
const {logoutUser} = useAuthStore()
const { downloadInvoice, loadOrders } = useOrder();

const page = ref(1);
const orders = ref([]);

const { data: response, status } = await loadOrders(user.value, page);

watch(
    response,
    () => {
        orders.value = response.value.data.map((order) => ({
            uuid: order.uuid,
            status: order.order_status[0].title,
        }));
    },
    {
        immediate: true,
    }
);

const columns = [
    {
        key: 'uuid',
        label: 'Order UUID',
    },
    {
        key: 'status',
        label: 'Status',
    },
    {
        key: 'download',
        label: 'Download Invoice',
    },
];

const download = async (uuid) => {
    const { data } = await downloadInvoice(uuid);
    //the data is a Blob instance now we need to download
    console.log(data);
    const url = window.URL.createObjectURL(data.value);
    const link = document.createElement('a');
    link.href = url;
    // link.target = '_blank';
    link.click();
    window.URL.revokeObjectURL(url);
};

const close = () => {
    store.profile = false;
};
</script>
