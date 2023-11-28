'use client'
import { BlockNoteEditor } from '@blocknote/core';
import React, { useState } from 'react'
import { BlockNoteView } from '@blocknote/react';
import "@blocknote/core/style.css"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

const BlogItem = (data: any) => {
    const supabase = createClientComponentClient();
    const router = useRouter();
    const [editable, seteditable] = useState(false)
    const [initialData, setInitialData] = useState(data?.data?.data)
    let editor = new BlockNoteEditor({
        initialContent: initialData,
        editable: editable
    })
    async function handleSave() {
        console.log(editor.topLevelBlocks)
        await supabase.from("data").update({ data: editor.topLevelBlocks }).eq("id", data?.data?.id).then(() => {
            setInitialData(editor.topLevelBlocks)
            seteditable(false);
        })
    }
    return (
        <div>
            <div className='border-b-2 py-2'>
                <h1 className='text-5xl text-text-semibold mb-4'>{data?.data?.title}</h1>
                <div className='flex mb-4'>
                    <p>Tags: </p>
                    {data?.data?.categories?.map((item: string, index: number) => <p className={`px-3 text-gray-500 ${index > 0 ? "border-black border-s-[1px]" : ""}`} key={index}>{item}</p>)}
                </div>
            </div>
            <BlockNoteView editor={editor} theme={'light'} className='my-10' />
            {data?.isEditable ? editable ? <button className='bg-green-200 py-1 px-4' onClick={() => { handleSave() }}>Save</button> : <button className='bg-blue-200 py-1 px-4' onClick={() => { seteditable(true) }}>Edit</button> : ""}

        </div>
    )
}

export default BlogItem