import Login from '@/components/Login'
import React from 'react'
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createServerClient } from '@/lib/db';

export const metadata: Metadata = {
    title: "Login",
    description: "Login page"
}

const page = async () => {

    const { data: { session } } = await createServerClient().auth.getSession();
    if (session != null) {
        return redirect("/")
    } else {
        return (
            <Login />
        )
    }
}
export default page