<template>
    <div>
        <header
            class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-[#4ec690] text-sm py-3"
        >
            <nav
                class="relative container max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                aria-label="Global"
            >
                <div class="flex items-center justify-between">
                    <a
                        class="flex items-center text-xl text-white"
                        href="#"
                        aria-label="Brand"
                    >
                        <logo class="w-6 h-6 text-white" />
                        <span class="ms-2">petson.</span>
                    </a>

                    <div class="sm:hidden">
                        <button
                            type="button"
                            class="hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
                            data-hs-collapse="#navbar-collapse-with-animation"
                            aria-controls="navbar-collapse-with-animation"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                class="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg
                                class="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    id="navbar-collapse-with-animation"
                    class="hs-collapse hidden sm:inline overflow-hidden transition-all duration-300 basis-full"
                >
                    <div
                        class="flex text-base flex-col sm:flex-row sm:items-center sm:justify-center py-2 md:py-0 sm:ps-7 uppercase font-semibold"
                    >
                    <NuxtLink :to="`/categories/${category.uuid}`"
                            class="py-3 ps-px sm:px-3 text-white"
                        >
                            Products
                        </NuxtLink>
                        <a
                            class="py-3 ps-px sm:px-3 text-white/80 hover:text-white"
                            href="#"
                        >
                            Promotions
                        </a>
                        <a
                            class="py-3 ps-px sm:px-3 text-white/80 hover:text-white"
                            href="#"
                            >Blog</a
                        >
                    </div>
                </div>

                <div
                    class="flex space-x-3 items-center grow w-4/12 justify-end"
                >
                    <NuxtLink to="/cart">
                        <button
                            class="py-3 px-4 inline-flex uppercase tracking-wider justify-center items-center gap-x-2 text-sm font-semibold rounded border border-white bg-transparent text-white hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            <i class="bi bi-cart"></i>
                            Cart ({{ store.totalItems }})
                        </button>
                    </NuxtLink>

                    <button
                        @click="showLogin"
                        class="py-3 px-4 inline-flex uppercase tracking-wider justify-center items-center gap-x-2 text-sm font-semibold rounded border border-white bg-transparent text-white hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                    >
                        Login
                    </button>

                    <button @click="showProfile" v-if="authenticated">
                        <div
                            class="h-10 rounded-full w-10 bg-white text-default flex justify-center items-center font-bold text-lg"
                            v-if="!user?.avatar"
                        >
                            {{ user?.first_name[0] }}
                        </div>
                        <div
                            v-else
                            class="h-10 rounded-full w-10 overflow-hidden"
                        >
                            <NuxtImg
                                :src="user.avatar"
                                provider="buckhill"
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </button>
                </div>
            </nav>
        </header>

        <main id="content">
            <div
                class="max-w-[85rem] container mx-auto py-10 px-4 sm:px-6 lg:px-8"
            >
                <slot />
            </div>
        </main>

        <AuthModals />

        <footer class="bg-default/10">
            <div
                class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto"
            >
                <!-- Grid -->
                <div
                    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10"
                >
                    <div class="col-span-full hidden lg:col-span-1 lg:block">
                        <a
                            class="flex flex-col items-center text-xl text-default"
                            href="#"
                            aria-label="Brand"
                        >
                            <logo class="w-14 h-14 text-default" />
                            <span class="ms-2">petson.</span>
                        </a>
                    </div>
                    <!-- End Col -->

                    <div>
                        <h4
                            class="text-xs font-semibold text-gray-900 dark:text-neutral-100"
                        >
                            Petson
                        </h4>

                        <div class="mt-3 grid space-y-3 text-sm">
                            <p>
                                <a
                                    class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                                    href="#"
                                    >About us</a
                                >
                            </p>
                            <p>
                                <a
                                    class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                                    href="#"
                                    >Blog</a
                                >
                            </p>
                            <p>
                                <a
                                    class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                                    href="#"
                                    >Store locator</a
                                >
                            </p>
                        </div>
                    </div>
                    <!-- End Col -->

                    <div>
                        <h4
                            class="text-xs font-semibold text-gray-900 dark:text-neutral-100"
                        >
                            Contact
                        </h4>

                        <div class="mt-3 grid space-y-3 text-sm text-gray-500">
                            <p class="text-gray-500">contact@petson.com</p>
                            <p>+385 000 000</p>
                            <p>35 Shnauzer avenue, Dogville AL</p>
                        </div>
                    </div>
                    <!-- End Col -->

                    <div>
                        <h4
                            class="text-xs font-semibold text-gray-900 dark:text-neutral-100"
                        >
                            Information
                        </h4>

                        <div class="mt-3 grid space-y-3 text-sm">
                            <p>
                                <a
                                    class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                                    href="#"
                                    >Ordering and shipping</a
                                >
                            </p>
                            <p>
                                <a
                                    class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                                    href="#"
                                    >FAQ</a
                                >
                            </p>
                            <p>
                                <a
                                    class="inline-flex gap-x-2 text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                                    href="#"
                                    >GDPR statement</a
                                >
                            </p>
                        </div>
                    </div>
                    <!-- End Col -->

                    <div>
                        <div class="mt-3 grid space-y-3 text-sm text-gray-500">
                            <p>
                                If you can't find an answer to your question,
                                please contact our
                                <a href="#" class="text-blue-600"
                                    >customer service</a
                                >
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

const store = useCartStore();

const { showLogin, showProfile } = useAuthPages();
const { authenticated, user } = storeToRefs(useAuthStore());
const {loadCategories} = useCategory()

const {data:response} = await loadCategories()
const category = response.value.data[0]
</script>
