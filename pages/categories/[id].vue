<template>
    <div class="flex">
        <div class="w-3/12 mt-16">
            <div class="hs-accordion-group">
                <div>
                    <button
                        class="uppercase text-sm hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                    >
                        Brands
                        <BootstrapIcon name="chevron-down" />
                    </button>
                    <div
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    >
                        <ul
                            class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400"
                        >
                            <li v-for="brand in brands.data" :key="brand.uuid">
                                <NuxtLink to="">
                                    <span>
                                        {{ brand.title }}
                                    </span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <button
                        class="hs-accordion-toggle uppercase hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400 text-sm"
                    >
                        Category
                        <BootstrapIcon name="chevron-down" />
                    </button>
                    <div
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    >
                        <ul
                            class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400"
                        >
                            <li
                                v-for="category in categories"
                                :key="category.uuid"
                                class="cursor-pointer my-2"
                            >
                                <NuxtLink :to="`/categories/${category.uuid}`">
                                    <span>
                                        {{ category.title }}
                                    </span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-6xl font-medium tracking-tight text-default">
                {{ products.data[products.data.length - 1].category.title }}
            </h2>

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
                <li class="inline-flex items-center">
                    <a
                        class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                        href="#"
                    >
                        Categories
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
                    </a>
                </li>
                <li
                    class="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
                    aria-current="page"
                >
                    {{ products.data[products.data.length - 1].category.title }}
                </li>
            </ol>

            <div
                class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            >
                <Product
                    v-for="product in products.data"
                    :product="product"
                    :key="product.uuid"
                />
            </div>

            <div
                class="flex justify-center px-3 py-3.5 border-gray-200 dark:border-gray-700"
            >
                <UPagination
                    v-model="page"
                    :page-count="products.per_page"
                    :total="products.total"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
const { loadProducts } = useCategory();
const { loadBrands } = useBrand();
const page = ref(1);

const { data: products }: any = await loadProducts(id as string, page);

const { data: brands }: any = await loadBrands();

const { data: categories } = useFetch<any>(
    'https://pet-shop.buckhill.com.hr/api/v1/categories',
    {
        transform: (payload) => payload.data,
    }
);
</script>

<style></style>
