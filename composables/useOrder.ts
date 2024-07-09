export const useOrder = () => {
    const token = useCookie('token');

    const downloadInvoice = (orderId: string) => {
        return useAsyncData(() =>
            $fetch(
                `https://pet-shop.buckhill.com.hr/api/v1/order/${orderId}/download`,
                {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                }
            )
        );
    };

    const loadOrders = (user: User, page: Ref<number> = ref(1)) => {
        return useAsyncData(
            user.uuid,
            () =>
                $fetch(
                    `https://pet-shop.buckhill.com.hr/api/v1/user/orders?page=${page.value}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token.value}`,
                        },
                    }
                ),
            {
                watch: [page],
            }
        );
    };

    const loadOrder = (orderId: string) => {
        return useAsyncData(orderId, () =>
            $fetch(`https://pet-shop.buckhill.com.hr/api/v1/order/${orderId}`, {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            })
        );
    };

    return {
        downloadInvoice,
        loadOrders,
        loadOrder,
    };
};
