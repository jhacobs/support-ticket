import {PaginationResponse} from "@/interfaces/pagination-response";
import {Link} from "@inertiajs/react";


export default function Pagination({ response }: { response: PaginationResponse<unknown> }) {

    return (
        <nav className="isolate flex justify-center">
            {response.links.map((link) => (
                <Link
                    href={link.url}
                    key={link.label}
                    className={
                        'flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ' +
                        (link.active
                            ? 'z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
                            : ''
                        )
                    }
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
