declare interface User {
    uuid: string;
    avatar: string | null;
    created_at: string;
    updated_at: string;
    token: string | null;
    first_name: string;
    last_name: string;
    address: string;
    phone_number: string;
    email: string;
    password: string;
    is_marketing: boolean;
}
