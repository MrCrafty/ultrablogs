import React from 'react'
import BlogItem from './BlogItem';
import { createServerClient } from '@/lib/db';
import { Metadata } from 'next';
import { VscArrowLeft } from "react-icons/vsc";
import Link from 'next/link';

const metadata: Metadata = {
    title: `Blog Page`,
    description: "Blog Page"
}
const page = async ({ params }: { params: { id: string } }) => {
    const user = (await createServerClient().auth.getSession()).data.session?.user.id;

    async function getData(id: string) {
        const res = await createServerClient().from("data").select().eq("id", id).limit(1).single();
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
                <div className='my-10 inline-block'>
                    <Link href="/blogs" className='text-xl flex items-center gap-2 '><VscArrowLeft /> Back</Link>
                </div>
                <BlogItem data={data} isEditable={user == data?.user_id} />
            </div>
        </div>
    )
}

export default page
