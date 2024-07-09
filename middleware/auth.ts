import { storeToRefs } from 'pinia';
export default defineNuxtRouteMiddleware((to, from) => {
    const { authenticated } = storeToRefs(useAuthStore());
    const { login } = storeToRefs(useAuthPages());

    if (!authenticated.value) {
        abortNavigation();
        return (login.value = true);
    }

    if (authenticated.value && to?.name == 'login') {
        return navigateTo('/');
    }
});
