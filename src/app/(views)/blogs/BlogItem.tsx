'use client'
import { Block, BlockNoteEditor, BlockNoteEditorOptions, BlockSpec, PartialBlock, TipTapNode } from '@blocknote/core'
import { BlockNoteView, useBlockNote } from '@blocknote/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect, useState } from 'react'

const BlogItem = (data: {
    data: PartialBlock<{ readonly paragraph: { node: TipTapNode<"paragraph", true, { domAttributes?: Partial<{ blockContainer: Record<string, string>; blockGroup: Record<string, string>; editor: Record<string, string>; blockContent: Record<string, string>; inlineContent: Record<string, string> }> | undefined }, any>; propSchema: { backgroundColor: { default: "default" }; textColor: { default: "default" }; textAlignment: { default: "left"; values: readonly ["left", "center", "right", "justify"] } } }; readonly heading: { node: TipTapNode<"heading", true, { domAttributes?: Partial<{ blockContainer: Record<string, string>; blockGroup: Record<string, string>; editor: Record<string, string>; blockContent: Record<string, string>; inlineContent: Record<string, string> }> | undefined }, any>; propSchema: { level: { default: number; values: readonly [1, 2, 3] }; backgroundColor: { default: "default" }; textColor: { default: "default" }; textAlignment: { default: "left"; values: readonly ["left", "center", "right", "justify"] } } }; readonly bulletListItem: { node: TipTapNode<"bulletListItem", true, { domAttributes?: Partial<{ blockContainer: Record<string, string>; blockGroup: Record<string, string>; editor: Record<string, string>; blockContent: Record<string, string>; inlineContent: Record<string, string> }> | undefined }, any>; propSchema: { backgroundColor: { default: "default" }; textColor: { default: "default" }; textAlignment: { default: "left"; values: readonly ["left", "center", "right", "justify"] } } }; readonly numberedListItem: { node: TipTapNode<"numberedListItem", true, { domAttributes?: Partial<{ blockContainer: Record<string, string>; blockGroup: Record<string, string>; editor: Record<string, string>; blockContent: Record<string, string>; inlineContent: Record<string, string> }> | undefined }, any>; propSchema: { backgroundColor: { default: "default" }; textColor: { default: "default" }; textAlignment: { default: "left"; values: readonly ["left", "center", "right", "justify"] } } }; readonly image: BlockSpec<"image", { textAlignment: { default: "left"; values: readonly ["left", "center", "right", "justify"] }; backgroundColor: { default: "default" }; url: { default: "" }; caption: { default: "" }; width: { default: 512 } }, false> }>[] | undefined, id: string, title: string, categories: string[], user_id: string
}) => {
    const supabase = createClientComponentClient();
    const [editorData, setEditorData] = useState(data.data);
    const [editable, setEditable] = useState(false);
    const [user, setUser] = useState<string | null>();
    const editor = new BlockNoteEditor({
        editable: editable,
        initialContent: editorData,
    });
    useEffect(() => {
        async function getUser() {
            const res = await supabase.auth.getSession();
            setUser(res.data.session?.user.id.toString() ?? null);
        }
        getUser();
    }, [])
    const handleSave = async () => {
        setEditorData(editor.topLevelBlocks)
        await supabase.from("data").update({ "data": editorData }).eq("id", data.id)
        setEditable(false);
    }
    return (
        <div>

            <div className='border-b-2 py-2'>
                <h1 className='text-5xl text-text-semibold mb-4'>{data?.title}</h1>
                <div className='flex mb-4'>
                    <p>Tags: </p>
                    {data?.categories?.map((item, index) => <p className={`px-3 text-gray-500 ${index > 0 ? "border-black border-s-[1px]" : ""}`} key={index}>{item}</p>)}
                </div>
            </div>
            <BlockNoteView editor={editor} theme={'light'} className='my-10' />
            {data.user_id.toString() == user?.toString() && !editable ?
                <button className='bg-blue-300 py-1 px-4' onClick={() => { setEditable(true); }}>Edit</button>
                : <button onClick={() => { handleSave() }} className='bg-green-300 py-1 px-4'>Save</button>}
        </div>
    )
}

export default BlogItem
