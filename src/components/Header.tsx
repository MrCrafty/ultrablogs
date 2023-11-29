import React from 'react'
import AuthButtons from './AuthButtons'
import Link from 'next/link'
import { createServerClient } from '@/lib/db'

const Header = async () => {
    const { data: { session } } = await createServerClient().auth.getSession();

    return (
        <div className='border-b-2 border-gray-300 shadow-xl'>
            <div className='py-4 container mx-auto'>
                <ul className='flex justify-between'>
                    <ul className='flex gap-3'>
                        <li><Link className='cursor-pointer' href="/">Home</Link></li>
                        <li><Link className='cursor-pointer' href="/blogs">Blogs</Link></li>
                    </ul>
                    <AuthButtons session={session} />
                </ul>
            </div >
        </div>
    )
}

export default Header