import { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
    familyList: Family[];
};

export interface Media {
    id: number;
    model_type: string;
    model_id: number;
    collection_name: string;
    name: string;
    file_name: string;
    mime_type: string;
    disk: string;
    size: number;
    manipulations: any;
    custom_properties: any;
    responsive_images: any;
    order_column: number;
    created_at: string;
    updated_at: string;
    original_url: string;
    preview_url: string;
}

export interface Family {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    media: Media[];
}
