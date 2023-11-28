import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import React from 'react'
import BlogItem from '../BlogItem';
async function getData(id: string) {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const res = await supabase.from("data").select().eq("id", id).limit(1).single();
    if (res.error) {
        return res.error.message;
    } else {
        return res.data;
    }
}
const page = async ({ params }: { params: { id: string } }) => {
    const data = await getData(params.id);
    return (
        <div className='text-black container'>
            <div className='w-1/2 mx-auto'>
                <BlogItem categories={data?.categories} data={data?.data} id={data?.id} title={data?.title} user_id={data?.userid} />
            </div>
        </div>
    )
}

export default page