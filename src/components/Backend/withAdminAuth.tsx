import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ComponentType } from 'react';

export default function withAdminAuth(PageComponent: ComponentType) {
    return function AdminAuthComponent(props: JSX.IntrinsicAttributes) {
        const { data: session, status } = useSession();
        const router = useRouter();

        useEffect(() => {
            if (!session?.user && status === 'authenticated') {
                router.push('/');
            }

        }, [status, router]);

        return <PageComponent {...props} />;
    };
}