import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import React from 'react'
import AuthButtons from './AuthButtons'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const Header = async () => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data: { session } } = await supabase.auth.getSession();

    return (
        <div className='py-4 container mx-auto'>
            <ul className='flex justify-between'>
                <ul className='flex gap-3'>
                    <li><Link className='cursor-pointer' href="/">Home</Link></li>
                    <li><Link className='cursor-pointer' href="/blogs">Blogs</Link></li>
                </ul>
                <AuthButtons session={session} />
            </ul>
        </div >
    )
}

export default Header