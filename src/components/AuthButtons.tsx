'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Session } from '@supabase/supabase-js'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

const AuthButtons = ({ session }: { session: Session | null }) => {
    const supabase = createClientComponentClient()
    const router = useRouter();
    return (
        <ul className='flex gap-3'>
            {
                session == null ?
                    <>
                        <li><Link href="/login">Sign In</Link></li>
                        <li><Link href="/register">Sign Up</Link></li>
                    </> :
                    <li>
                        <button onClick={async () => { await supabase.auth.signOut(); router.refresh(); }}>Sign Out</button>
                    </li>
            }
        </ul>
    )
}

export default AuthButtons