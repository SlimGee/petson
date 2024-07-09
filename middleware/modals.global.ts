export default defineNuxtRouteMiddleware((to, from) => {
    const { reset } = useAuthPages();
    reset();
});
