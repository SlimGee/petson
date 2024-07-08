import { defineStore } from 'pinia';

interface UserPayload {
    email: string;
    password: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        user: null as User | null,
    }),
    persist: true,
    actions: {
        async authenticate(token: string) {
            this.authenticated = true;
            const cookie = useCookie('token');
            cookie.value = token;
            this.authenticated = true;
        },

        setUser(user: User) {
            this.user = user;
        },
        async loadUser() {
            const token = useCookie('token');

            try {
                const { data: user }: any = await $fetch(
                    'https://pet-shop.buckhill.com.hr/api/v1/user',
                    {
                        headers: {
                            Authorization: `Bearer ${token.value}`,
                        },
                    }
                );

                this.user = user;
            } catch (error) {
                this.authenticated = false;
                token.value = null;
            }
        },
        logoutUser() {
            const token = useCookie('token');
            this.authenticated = false;
            token.value = null;
        },
    },
});
