//@ts-nocheck
'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem';
import { PostgrestResponseSuccess } from '@supabase/postgrest-js/dist/module/types';


const BlogList = () => {
    const [data, setData] = useState<any>();
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
            <div className='border-b-2 py-2'>
                <h1 className='text-5xl text-text-semibold mb-4'>{data?.data?.title}</h1>
                <div className='flex mb-4'>
                    <p>Tags: </p>
                    {data?.categories?.map((item, index) => <p className={`px-3 text-gray-500 ${index > 0 ? "border-black border-s-[1px]" : ""}`} key={index}>{item}</p>)}
                </div>
            </div>
        }</div>
    )
}

export default BlogList