import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { announcement } from '@/routes';

export default function Announcements() {
    return (
        <>
            <Head title="Announcements" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor minima officia excepturi provident. Nam fugiat, quia earum, officiis, dolores dicta eligendi nobis deserunt soluta mollitia porro. Explicabo ipsum sequi exercitationem.</p>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </>
    );
}

Announcements.layout = {
    breadcrumbs: [
        {
            title: 'Announcements',
            href: announcement(),
        },
    ],
};