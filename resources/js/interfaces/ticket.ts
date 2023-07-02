import {User} from "@/interfaces/user";

export interface Ticket {
    title: string;
    message: string;
    creator: User;
    agent: User;
    created_at: string
}
