import { BlockNoteView, useBlockNote } from '@blocknote/react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import React from 'react'
import BlogItem from '../BlogItem';
async function getData(id: string) {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const res = await supabase.from("data").select().eq("id", id);
    if (res.error) {
        return res.error.message;
    }
    return res.data;
}
const page = async ({ params }: { params: { id: string } }) => {
    const data = await getData(params.id);
    console.log(data[0]);
    return (
        <div className='text-black'>
            {/* <BlogItem data={data[0]} /> */}
        </div>
    )
}

export default page