import { defineStore } from 'pinia';

interface CartItem {
    product: string; //uuuid,
    quantity: number;
}

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        items: [] as CartItem[],
    }),
    persist: true,
    getters: {
        totalItems(): number {
            return this.items.reduce(
                (total: number, item: CartItem) => total + item.quantity,
                0
            );
        },
        getItem: (state) => {
            return (uuid: string): CartItem | undefined =>
                state.items.find((item: CartItem) => item.product === uuid);
        },
    },
    actions: {
        addItem(item: string, quantity: number = 1) {
            const existingItem = this.getItem(item);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                this.items.push({ product: item, quantity });
            }
        },

        removeItem(item: string) {
            const index = this.items.findIndex(
                (i: CartItem) => i.product === item
            );
            if (index !== -1) {
                this.items.splice(index, 1);
            }
        },
    },
});
