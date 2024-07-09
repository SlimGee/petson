import { defineStore } from 'pinia';

export const useAuthPages = defineStore('authPages', {
    state: () => ({
        login: false,
        register: false,
        profile: false,
    }),
    actions: {
        showLogin() {
            this.login = true;
            this.register = false;
            this.profile = false;
        },
        showRegister() {
            this.register = true;
            this.login = false;
            this.profile = false;
        },
        showProfile() {
            this.profile = true;
            this.login = false;
            this.register = false;
        },
    },
});
