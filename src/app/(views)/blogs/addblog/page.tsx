import React from 'react'
import AddBlogForm from './AddBlogForm'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const page = async () => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })
    const { data: { session } } = await supabase.auth.getSession();
    if (session == null) {
        return redirect("/")
    } else {
        return (<>
            <AddBlogForm />
        </>)
    }
}


export default page