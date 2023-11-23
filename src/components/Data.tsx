'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useEffect, useState } from 'react'
const Data = () => {
    const supabase = createClientComponentClient();
    const [data, setData] = useState<any>();
    const [markdown, setMarkdown] = useState<string>("");

    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        await supabase.from("data").select().then(data => setData(data?.data));
        const data = await supabase.auth.getSession();
        console.log(data);

    }
    const addData = async () => {
        const session = await supabase.auth.getSession();
        if (session.data?.session != null) {
            const data = await supabase.from("data").insert({ data: markdown, title: "Blog", user_id: session.data.session?.user?.id });
            data.error ? alert(data.error.message) : console.log(data.data)
        } else {
            alert("Please Login To add Data")
        }
    }

    return (
        <div>
            <button onClick={() => { addData() }} className='bg-blue-500 px-4 py-1 rounded-lg'>Add Data</button>
        </div>
    )
}

export default Data