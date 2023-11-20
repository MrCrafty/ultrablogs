'use client';
import React, { useEffect } from 'react'
import { supabase } from '../../supabase';

const Data = () => {

    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const data = await supabase.from("data").select();
    }
    const addData = async () => {
        await supabase.from("data").insert({ data: { name: "something" }, title: "Blog", user_id: await supabase.auth.getSession()?.then((data) => data.data.session?.user.id).catch((err) => window.alert(err)) })
    }
    return (
        <div>
            <button onClick={() => { addData() }} className='bg-blue-500 px-4 py-1 rounded-lg'>Click</button>
            <button onClick={async () => {
                const res = await supabase.auth.signOut()
                console.log('res', res);
            }} className='bg-blue-500 px-4 py-1 rounded-lg'>Logout</button>
        </div>
    )
}

export default Data