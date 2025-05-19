export interface Topics {
    id: string;
    user_id?: string;
    category_id?: string | null;
    title?: string;
    content?: string | null;
    tags?: any;
    created_at?: string;
    status?: "pending" | "approved" | "rejected";
    description?: string | null;
    video_url?: string;
    upvotes?: number | null;
    downvotes?: number | null;
}