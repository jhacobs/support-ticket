import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import {User} from "@/interfaces/user";

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen flex">
            <nav className="bg-indigo-600 w-1/5 p-2">
                <header className="mb-8">
                    <div className="w-16">
                        <ApplicationLogo></ApplicationLogo>
                    </div>
                </header>
                <ul>
                    <li>
                        <NavLink className="mb-2" href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href={route('tickets.index')} active={route().current('tickets.index')}>
                            Tickets
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="flex-1 flex flex-col bg-slate-100">
                <header className="shadow bg-white">
                    {/* Profile dropdown */}
                    <div className="flex justify-end p-4">
                        <Dropdown>
                            <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>Profiel</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Uitloggen
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </header>

                <main className="pt-4 min-h-fit flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}
