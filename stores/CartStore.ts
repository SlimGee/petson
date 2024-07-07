import { defineStore } from 'pinia';

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
                state.items.find(
                    (item: CartItem) => item.product.uuid === uuid
                );
        },
    },
    actions: {
        addItem(product: Product, quantity: number = 1) {
            const existingItem = this.getItem(product.uuid);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                this.items.push({ product, quantity });
            }
        },

        removeItem(item: string) {
            const index = this.items.findIndex(
                (i: CartItem) => i.product.uuid === item
            );
            if (index !== -1) {
                this.items.splice(index, 1);
            }
        },
    },
});
