import Login from '@/components/Login'
import React from 'react'
import { Metadata } from 'next';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect, useRouter } from 'next/navigation';

export const metadata: Metadata = {
    title: "Login",
    description: "Login page"
}

const page = async () => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })
    const { data: { session } } = await supabase.auth.getSession();
    if (session != null) {
        return redirect("/")
    } else {
        return (
            <Login />
        )
    }
}
export default page