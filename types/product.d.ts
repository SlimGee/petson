interface ProductMetadata {
    brand: string;
    image: string;
}
declare interface Product {
    uuid: string;
    title: string;
    slug: string;
    category_uuid: string;
    price: number;
    description: string;
    metadata: ProductMetadata;
    created_at: string;
    updated_at: string;
    category: Category;
    brand: Brand;
}
