import { defineStore } from 'pinia';

interface UserPayload {
    email: string;
    password: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
    }),
    actions: {
        async authenticateUser({ email, password }: UserPayload) {
            const { data, status }: any = await useFetch(
                'https://pet-shop.buckhill.com.hr/api/v1/user/login',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: { email, password },
                }
            );
            this.loading = true;

            if (data.value) {
                const token = useCookie('token');
                token.value = data.value?.data?.token;
                this.authenticated = true;
            }
        },
        logoutUser() {
            const token = useCookie('token');
            this.authenticated = false;
            token.value = null;
        },
    },
});
