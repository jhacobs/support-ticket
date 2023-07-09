export interface PaginationResponse<T> {
    data: T[];
    current_page: number;
    per_page: number;
    total: number;
    links: PaginationLink[];
}

export interface PaginationLink {
    active: boolean;
    label: string;
    url: string;
}
