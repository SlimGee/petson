export const useBrand = () => {
    const loadBrands = (page: Ref<number> = ref(1)) => {
        return useAsyncData(
            `brands-${page.value}`,
            () =>
                $fetch(
                    `https://pet-shop.buckhill.com.hr/api/v1/brands?page=${page.value}`
                ),
            {
                watch: [page],
            }
        );
    };

    return { loadBrands };
};
