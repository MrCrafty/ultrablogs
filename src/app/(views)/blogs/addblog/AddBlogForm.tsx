"use client";
import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import Markdown from "react-markdown";
import "./style.css";
import { BlockNoteView, lightDefaultTheme, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Block } from "@blocknote/core";

const AddBlogForm = () => {
    const supabase = createClientComponentClient();
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await supabase.from("data").insert({ title: title, categories: tags.tags, data: blog, user_id: (await supabase.auth.getSession()).data.session?.user.id })
        res.error ? alert(res.error.message) : console.log(res.data);
    }
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState({ tags: [] });
    const [blog, setBlog] = useState<Block[]>();
    const editor = useBlockNote({});
    editor.onEditorContentChange(async () => {
        setBlog(editor.topLevelBlocks)
    })
    return (
        <div className="w-1/2 mx-auto my-5">
            <form onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col gap-3">
                <div className="w-full">
                    <input
                        required
                        type="text"
                        name="title"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        className="bg-transparent pl-0 w-full focus:outline-none px-4 py-2 text-4xl text-black placeholder:text-gray-400"
                        placeholder="Enter Blog Title"
                    />
                </div>
                <BlockNoteView editor={editor} theme={lightDefaultTheme} className="h-screen border-[1px] py-3" />
                <TagsInput
                    inputProps={{ "placeholder": "Add Blog Categories" }}
                    onlyUnique={true}
                    value={tags.tags}
                    className="[&>span>input]:focus:border-black [&>span>input]:w-5/12 [&>span>input]:text-2xl focus:outline-none px-3 py-2 bg-transparent border-[1px] border-black "
                    onChange={(e) => setTags({ tags: e })}
                />
                <button type="submit" className="bg-green-500 w-1/5 py-2 px-4 text-white text-xl">Save</button>
            </form>
        </div>
    );
};

export default AddBlogForm;
