// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        'nuxt-bootstrap-icons',
        'vue3-carousel-nuxt',
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxt/image',
        '@nuxt/ui',
    '@sidebase/nuxt-pdf'
    ],
    tailwindcss: {
        configPath: './tailwind.config.js',
    },
    typescript: {
        typeCheck: true,
    },
    runtimeConfig: {
        buckhill: {
            siteUrl: 'https://pet-shop.buckhill.com.hr/api/v1/file',
        },
    },
    colorMode: {
        preference: 'light',
    },
    image: {
        providers: {
            buckhill: {
                name: 'buckhill', // optional value to overrider provider name
                provider: '~/providers/buckhill.ts', // Path to custom provider
                options: {
                    // ... provider options
                    baseURL: 'https://pet-shop.buckhill.com.hr/api/v1/file',
                },
            },
        },
    },
});

