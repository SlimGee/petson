// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-bootstrap-icons',
        'vue3-carousel-nuxt',
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],
    tailwindcss: {
        configPath: './tailwind.config.js',
    },
    typescript: {
        typeCheck: true,
    },
});
