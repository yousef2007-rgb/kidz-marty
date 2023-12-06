"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const page = (props: {}) => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();

        // TODO: Implement sign in logic here
        // Make sure to redirect the user to the home page after successful sign in

        router.push('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
                <h1 className="text-xl font-bold">Sign In</h1>

                <div className="mt-4">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="w-full p-2 border rounded-md focus:border-blue-500"
                    />
                </div>

                <div className="mt-4">
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full p-2 border rounded-md focus:border-blue-500"
                    />
                </div>

                <div className="mt-4">
                    <button type="submit" className="bg-blue-500 text-white font-bold p-2 rounded-md hover:bg-blue-600">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default page;
