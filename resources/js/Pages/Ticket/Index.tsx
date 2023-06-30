import TicketListItem from "@/Components/Ticket/ListItem";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {PageProps} from "@/interfaces/page-props";
import {Head} from "@inertiajs/react";

export default function TicketIndex({auth}: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tickets</h2>}
        >
            <Head title="Tickets"></Head>

            <div>
                <ul className="divide-y divide-gray-100 px-8">
                    <TicketListItem></TicketListItem>
                    <TicketListItem></TicketListItem>
                </ul>
            </div>
        </AuthenticatedLayout>
    );
}
