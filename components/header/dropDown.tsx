"use client"
import React, { FC, useState } from 'react'
import Link from 'next/link';

interface Props {
    title: string;
    links: { text: string, link: string }[]
}
export const dropDown: FC<Props> = ({ title, links }) => {
    const [dropDownVisability, setDropDownVisability] = useState<boolean>(false);
    const handleMouseOver = () => {
        setDropDownVisability(true)
    }
    const handleMouseOut = () => {
        setDropDownVisability(false)
    }
    return (
        <span
            className='flex z-10 hover:-translate-y-1 transition-all p-2 rounded-t-md  hover:bg-gray-200'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <button className='hover:underline decoration-2'>{title}</button>
            <div
                className='flex absolute top-full  text-center w-[300px] p-2 rounded-md left-1/2 -translate-x-1/2 flex-col bg-gray-200'
                style={{ display: dropDownVisability == true ? "flex" : "none" }}>
                {links.map((link, index) => (
                    <Link className='my-2 hover:underline decoration-2 text-md' key={index} href={link.link}>{link.text}</Link>
                ))}
            </div>
        </span>
    )
}