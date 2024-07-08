import { defineStore } from 'pinia';

export const useAuthPages = defineStore('authPages', {
    state: () => ({
        login: false,
        register: false,
    }),
    actions: {
        showLogin() {
            this.login = true;
            this.register = false;
        },
        showRegister() {
            this.register = true;
            this.login = false;
        },
    },
});
