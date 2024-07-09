export const useCategory = () => {
    const loadCategories = (page: Ref<number> = ref(1)) => {
        return useAsyncData(
            `orders-${page.value}`,
            () =>
                $fetch(
                    `https://pet-shop.buckhill.com.hr/api/v1/categories?page=${page.value}`
                ),
            {
                watch: [page],
            }
        );
    };

    const loadProducts = (categoryId: string, page: Ref<number> = ref(1)) => {
        return useAsyncData(
            `orders-${page.value}`,
            () =>
                $fetch(
                    `https://pet-shop.buckhill.com.hr/api/v1/products?page=${page.value}&category=${categoryId}`
                ),
            {
                watch: [page],
            }
        );
    };

    return { loadCategories, loadProducts };
};
