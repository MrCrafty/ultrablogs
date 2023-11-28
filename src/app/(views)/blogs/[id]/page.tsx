import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import React from 'react'
import BlogItem from './BlogItem';
const page = async ({ params }: { params: { id: string } }) => {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const user = (await supabase.auth.getSession()).data.session?.user.id;

    async function getData(id: string) {
        const res = await supabase.from("data").select().eq("id", id).limit(1).single();
        if (res.error) {
            return res.error.message;
        } else {
            return res.data;
        }
    }
    const data = await getData(params.id);
    return (
        <div className='text-black container'>
            <div className='w-1/2 mx-auto'>
                <BlogItem data={data} isEditable={user == data?.user_id} />
            </div>
        </div>
    )
}

export default page