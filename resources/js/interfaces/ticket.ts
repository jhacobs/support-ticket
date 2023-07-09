import {User} from "@/interfaces/user";

export interface Ticket {
    id: number;
    title: string;
    message: string;
    creator: User;
    agent: User;
    created_at: string
}
