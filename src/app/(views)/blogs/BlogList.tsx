'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import React from 'react'

async function getData() {
    const supabase = createClientComponentClient();
    const res = await supabase.from("data").select();
    if (res.error) {
        return res.error.message;
    }
    return res.data;
}

const BlogList = async () => {
    const data = await getData();
    console.log('Hello');
    console.log('data', data);
    return (
        <div>BlogList</div>
    )
}

export default BlogList