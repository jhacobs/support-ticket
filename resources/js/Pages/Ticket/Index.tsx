import TicketListItem from "@/Components/Ticket/ListItem";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {PageProps} from "@/interfaces/page-props";
import {Head} from "@inertiajs/react";
import {Ticket} from "@/interfaces/ticket";
import {PaginationResponse} from "@/interfaces/pagination-response";

export default function TicketIndex({auth, tickets}: PageProps<{ tickets: PaginationResponse<Ticket> }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tickets</h2>}
        >
            <Head title="Tickets"></Head>

            <div>
                <ul className="divide-y divide-gray-100 px-8">
                    {tickets.data.map((ticket) => (
                        <TicketListItem ticket={ticket}></TicketListItem>
                    ))}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
}
