
import React from 'react'
import BlogList from './BlogList'
import { createServerClient } from '@/lib/db'
import Link from 'next/link'

const page = async () => {
    const supabase = createServerClient()
    const data = await supabase.from("data").select("*").order("inserted_at", { ascending: false }).eq("user_id", (await supabase.auth.getSession()).data.session?.user.id);
    const count = data?.data?.length ?? 0
    return (
        <div className='w-11/12 lg:w-1/2 mx-auto'>
            {count >= 1 ?
                <BlogList data={data} />
                : <p className='text-xl'>No blogs to show in your account. <Link href={"/blogs/addblog"} className='text-blue-400'>Click Here to Add Blog</Link>   </p>}
        </div>
    )
}

export default page