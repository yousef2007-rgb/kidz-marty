import React from 'react'
import axios from 'axios';
import {search as Search} from '@/components/search/index';
import { authIcon as AuthIcon } from '@/public/icons/authIcon';
import { dropDown as DropDown } from './dropDown';
import { attribute as Attribute } from './attribute';
import { cartButton as CartButton } from './cartButton';
import Link from 'next/link';

const getCategories = async () => {
    const categories = await axios.get(`${process.env.URL}/api/categories`);
    return categories.data;
}

const header = async () => {
    const categories = await getCategories();
    const links = [];
    for (let i = 0; i < categories.length; i++) {
        links.push({ text: categories[i].title, link: `/category/${categories[i]._id}` })
    }
    return (
        <header className='py-5 font-medium px-3 flex items-center justify-between'>
            <Link href={'/'} className="min-h-[80px] ">
                <img src='/images/logo.png' alt="kidzmarty logo" />
            </Link>
            <nav className='hidden mx-2 h-full max-w-sm w-full sm:flex justify-between relative text-gray-900 font-bold items-center text-lg'>
                <Attribute link='/' text='Home' />
                <Attribute link='/aboutus' text='About Us' />
                <DropDown
                    title={'Categories'}
                    links={links}
                />
            </nav>
            <div className='flex'>
                <Search />
                <CartButton />
                <button className='mx-4 hover:-translate-y-1 transition-all'><AuthIcon /></button>
            </div>
        </header >
    )
}

export default header;
