import Login from '@/components/Login'
import React from 'react'
import { isLogin } from '../../../../supabase';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Login",
    description: "Login page"
}

const page = async () => {
    const session = isLogin();
    if (await session) {
        window.location.href = "/"
    }
    return (
        <Login />
    )
}
export default page