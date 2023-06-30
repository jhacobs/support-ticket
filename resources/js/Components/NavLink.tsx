import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'text-white inline-flex items-center text-base font-medium focus:outline-none w-full p-1 pl-2 rounded ' +
                (active
                    ? 'bg-indigo-700 '
                    : 'text-gray-500 hover:bg-indigo-700') +
                className
            }
        >
            {children}
        </Link>
    );
}
