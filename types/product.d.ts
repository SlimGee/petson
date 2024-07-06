interface ProductMetadata {
    brand: string;
    image: string;
}
declare interface Product {
    uuid: String;
    title: String;
    slug: String;
    category_uuid: String;
    price: Number;
    description: String;
    metadata: ProductMetadata;
    created_at: string;
    updated_at: string;
    category: Category;
    brand: Brand;
}
