'use client'
import { BlockNoteView, useBlockNote } from '@blocknote/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect, useState } from 'react'
import "@blocknote/core/style.css"

const BlogItem = (data: any) => {
    const supabase = createClientComponentClient();
    const [editorData, setEditorData] = useState(data.data);
    const [editable, setEditable] = useState(false);
    const [user, setUser] = useState<string | null>();

    const editor = useBlockNote({
        editable: editable,
        initialContent: editorData,
    });
    const handleSave = async () => {
        setEditorData(editor.topLevelBlocks)
        await supabase.from("data").update({ "data": editorData }).eq("id", data.id)
        setEditable(false);
    }
    const getUser = async () => {
        setUser((await supabase.auth.getSession()).data.session?.user.id)
    }
    useEffect(() => {
        getUser();
    }, [])
    return (
        <div>
            <div className='border-b-2 py-2'>
                <h1 className='text-5xl text-text-semibold mb-4'>{data?.title}</h1>
                <div className='flex mb-4'>
                    <p>Tags: </p>
                    {data?.categories?.map(({ item, index }: { item: string, index: number }) => <p className={`px-3 text-gray-500 ${index > 0 ? "border-black border-s-[1px]" : ""}`} key={index}>{item}</p>)}
                </div>
            </div>
            <BlockNoteView editor={editor} theme={'light'} className='my-10' />
            {data?.user_id?.toString() == user?.toString() ? (!editable ?
                <button className='bg-blue-300 py-1 px-4' onClick={() => { setEditable(true); }}>Edit</button>
                : <button onClick={() => { handleSave() }} className='bg-green-300 py-1 px-4'>Save</button>) : ""}
        </div>
    )
}

export default BlogItem
