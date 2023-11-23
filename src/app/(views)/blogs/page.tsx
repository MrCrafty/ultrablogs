import React from 'react'
import BlogList from './BlogList'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';

const Blogs = async () => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })
    const { data: { session } } = await supabase.auth.getSession();
    if (session == null) {
        return redirect("/")
    } else {
        return (
            <div><BlogList /></div>
        )
    }

}

export default Blogs