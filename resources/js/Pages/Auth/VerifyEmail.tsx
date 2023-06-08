import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verificatie" />

            <div className="mb-4 text-sm text-gray-600">
                Bedankt voor je registratie! Wil je voordat je begint je e-mailadres verifiëren door op de link te klikken die we je zojuist via mail hebben verstuurd? Als je de e-mail niet hebt ontvangen, sturen we je graag een nieuwe.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    Er is een nieuwe verificatielink verstuurd naar het e-mailadres dat je ingegeven hebt tijdens de registratie.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={processing}>Verificatie-e-mail opnieuw versturen</PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Uitloggen
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
