import {Ticket} from "@/interfaces/ticket";

interface Props {
    ticket: Ticket
}

export default function TicketListItem({ ticket }: Props) {
    return (
        <li className="p-5 bg-white mb-4 shadow rounded-lg">
            <div>
                <p className="text-sm font-semibold text-gray-900">{ ticket.title }</p>
                <p className="text-sm mt-1 text-gray-500">{ticket.creator.name} - { ticket.created_at }</p>
            </div>
        </li>
    )
}
