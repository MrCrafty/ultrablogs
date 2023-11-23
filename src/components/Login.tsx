'use client'
import React, { useState } from 'react'
import { PiUserCircleLight } from 'react-icons/pi';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';


const Login = () => {
    const supabase = createClientComponentClient();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await supabase.auth.signInWithPassword({ email: email, password: password })
        if (res.error) {
            window.alert(res.error.message)
        } else {
            window.alert("successfully signed in")
            window.location.href = "/"
        }
    }
    return (
        <div className="container mx-auto">
            <div>
                <form onSubmit={(e) => { handleFormSubmit(e) }} className="flex flex-col relative w-3/12 mx-auto p-5 rounded-lg shadow-2xl mt-44 border-[1px] gap-y-6">
                    <PiUserCircleLight className="text-6xl text-black bg-white absolute -top-8 left-1/2 -translate-x-1/2" />
                    <h3 className="text-3xl text-center my-5 text-black">Login</h3>
                    <input onChange={(e) => { setemail(e.target.value) }} className="px-3 py-1 text-xl bg-transparent outline-none border-b-[1px] text-black" type="email" name="email" placeholder="Enter email" autoComplete="email" />
                    <input onChange={(e) => { setpassword(e.target.value) }} className="px-3 py-1 text-xl bg-transparent outline-none border-b-[1px] text-black" type="password" name="password" autoComplete="current-password" placeholder="Enter password" />
                    <button type="submit" className="hover: w-1/2 mx-auto border-[1px] border-blue-500 py-2 rounded-md hover:bg-blue-500 transition-all disabled:bg-gray-500 disabled:text-gray-900 disabled:border-none text-black">Submit</button>
                </form>
            </div>

        </div >
    );
}

export default Login