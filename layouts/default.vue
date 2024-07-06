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
                        <img
                            src="~/assets/img/logo.svg"
                            alt="Logo"
                            class="w-6 h-6"
                        />
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
                        <a
                            class="py-3 ps-px sm:px-3 text-white"
                            href="#"
                            aria-current="page"
                        >
                            Promotions
                        </a>
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

                <div class="grid gap-3 sm:inline-flex grow w-4/12 justify-end">
                    <a
                        class="py-3 px-4 inline-flex uppercase tracking-wider justify-center items-center gap-x-2 text-sm font-semibold rounded border border-white bg-transparent text-white hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                    >
                        <i class="bi bi-cart"></i>
                        Cart (0)
                    </a>

                    <a
                        class="py-3 px-4 inline-flex uppercase tracking-wider justify-center items-center gap-x-2 text-sm font-semibold rounded border border-white bg-transparent text-white hover:bg-white/50 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                    >
                        Login
                    </a>
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
    </div>
</template>

<script setup></script>
