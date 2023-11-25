'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem';


const BlogList = () => {
    const [data, setData] = useState<any[]>();
    async function getData() {
        const supabase = createClientComponentClient();
        const res = await supabase.from("data").select("*");
        if (res.error) {
            return res.error.message;
        } else {
            setData(res.data);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>{
            data?.map((data, index) => { return <BlogItem title={data?.title} categories={data?.categories?.categories} key={index} /> })
        }</div>
    )
}

export default BlogList