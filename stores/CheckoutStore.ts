import { defineStore } from 'pinia';

interface ShippingDetails {
    first_name: string;
    last_name: string;
    address1: string;
    address2: string | undefined;
    city: string;
    state: string | undefined;
    postcode: string;
    country: string;
    use_as_payment: boolean;
}

interface BillingDetails {
    first_name: string;
    last_name: string;
    address1: string;
    address2: string | undefined;
    city: string;
    state: string | undefined;
    postcode: string;
    country: string;
    use_as_shipping: boolean;
}

interface PaymentDetails {
    type: string;
    details: any;
}

export const useCheckoutStore = defineStore('checkoutStore', {
    state: () => ({
        shipping: {
            first_name: '',
            last_name: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            use_as_payment: false,
        } as ShippingDetails,
        billing: {
            first_name: '',
            last_name: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            use_as_shipping: false,
        } as BillingDetails,
        payment: {
            type: '',
            details: {},
        } as PaymentDetails,
    }),

    persist: true,

    actions: {
        setShippingDetails(details: ShippingDetails) {
            this.shipping = details;
        },

        setBillingDetails(details: BillingDetails) {
            this.billing = details;
        },

        setPaymentDetails(details: PaymentDetails) {
            this.payment = details;
        },
    },
});
