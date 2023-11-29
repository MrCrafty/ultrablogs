import React from 'react'
import AddBlogForm from './AddBlogForm'
import { redirect } from 'next/navigation';
import { createServerClient } from '@/lib/db';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Add Blog',
    description: "Add Blog"
}

const page = async () => {
    const { data: { session } } = await createServerClient().auth.getSession();
    if (session == null) {
        return redirect("/")
    } else {
        return (<>
            <AddBlogForm />
        </>)
    }
}


export default page