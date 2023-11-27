'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem';
import { PostgrestResponseSuccess } from '@supabase/postgrest-js/dist/module/types';


const BlogList = () => {
    const [data, setData] = useState<PostgrestResponseSuccess<any[]>>();
    async function getData() {
        const supabase = createClientComponentClient();
        const res = await supabase.from("data").select("*");
        if (res.error) {
            return res.error.message;
        } else {
            console.log(res);
            setData(res);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='w-1/2 mx-auto'>{
            data?.data?.map((data, index) => { return <BlogItem data={data?.data} id={data?.id} user_id={data?.user_id} title={data?.title} categories={data?.categories} key={index} /> })
        }</div>
    )
}

export default BlogList