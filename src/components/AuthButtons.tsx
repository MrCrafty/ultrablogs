'use client'
import { supabaseClient } from '@/lib/dbClient'
import { Session } from '@supabase/supabase-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const AuthButtons = ({ session }: { session: Session | null }) => {
    const router = useRouter();
    return (
        <ul className='flex gap-3'>
            {
                session == null ?
                    <>
                        <li><Link href="/login">Sign In</Link></li>
                        <li><Link href="/register">Sign Up</Link></li>
                    </> :
                    <li className='flex gap-3'>
                        <button onClick={async () => { await supabaseClient.auth.signOut(); router.refresh(); }}>Sign Out</button>
                        <a href="/blogs/addblog">Add Blog</a>
                    </li>
            }
        </ul>
    )
}

export default AuthButtons