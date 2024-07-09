<template>
    <!-- Hero -->
    <div class="relative overflow-hidden">
        <div class="">
            <div class="max-w-2xl text-center mx-auto">
                <div class="relative mx-auto w-8/12 mt-6">
                    <input
                        type="text"
                        class="py-3 px-4 ps-11 block w-full !ring-default !border-default placeholder:text-default rounded text-sm focus:border-default focus:ring-default disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Search products"
                    />
                    <div
                        class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none"
                    >
                        <svg
                            class="flex-shrink-0 size-4 text-default"
                            data-slot="icon"
                            width="24"
                            height="24"
                            aria-hidden="true"
                            fill="none"
                            stroke-width="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="mt-10 relative max-w-6xl mx-auto">
                <div
                    class="w-full object-cover h-96 sm:h-[480px] bg-[url('~/assets/img/hero.png')] bg-no-repeat bg-center bg-cover rounded"
                ></div>

                <div class="absolute inset-0 size-full">
                    <div class="size-full flex p-10">
                        <div>
                            <div>
                                <span
                                    class="bg-neutral-900/40 w-auto inline-block p-3 text-white font-medium sm:text-5xl"
                                >
                                    Up to 30% sale
                                </span>
                            </div>
                            <div class="mt-3">
                                <span
                                    class="bg-neutral-900/40 p-2 text-white font-medium sm:text-xl"
                                >
                                    On select dog food and toys
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FeaturedCategory :categories="categories" />
        <!-- Features -->
        <div class="max-w-6xl mx-auto py-16">
            <!-- Grid -->
            <div
                class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32"
            >
                <div>
                    <img
                        class="rounded"
                        src="~/assets/img/feat1.png"
                        alt="Image Description"
                    />
                </div>
                <!-- End Col -->

                <div class="mt-5 sm:mt-10 lg:mt-0">
                    <div class="space-y-6 sm:space-y-8">
                        <!-- Title -->
                        <div class="space-y-2 md:space-y-4">
                            <h2
                                class="font-medium text-3xl lg:text-5xl text-default"
                            >
                                Treat your pup
                            </h2>
                            <a
                                class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 font-semibold border border-default bg-default underline text-white hover:bg-default/80 disabled:opacity-50 disabled:pointer-events-none"
                                href="#"
                            >
                                Discover our dog treat selection
                            </a>
                        </div>

                        <!-- End List -->
                    </div>
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
        </div>

        <FeaturedCategory :categories="categories" />

        <div class="max-w-6xl mx-auto py-16">
            <div
                class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32"
            >
                <div class="mt-5 sm:mt-10 lg:mt-0">
                    <div class="space-y-6 sm:space-y-8">
                        <div class="space-y-2 md:space-y-4">
                            <h2
                                class="font-medium text-3xl lg:text-5xl text-default"
                            >
                                Get the best tips
                            </h2>
                            <a
                                class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 font-semibold border border-default bg-default underline text-white hover:bg-default/80 disabled:opacity-50 disabled:pointer-events-none"
                                href="#"
                            >
                                Read our blog
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <img
                        class="rounded"
                        src="~/assets/img/feat2.png"
                        alt="Image Description"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch<any>(
    'https://pet-shop.buckhill.com.hr/api/v1/categories'
);

const categories: Category[] = data.value.data;
</script>
