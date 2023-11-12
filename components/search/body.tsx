"use client"
import React, { ChangeEvent, KeyboardEvent, FC, MouseEvent, useState, useRef } from 'react'
import { Product } from '@/types/productsTypes'
import { closeIcon as CloseIcon } from '@/public/icons/closeIcon';
import { searchIcon as SearchIcon } from '@/public/icons/searchIcon';
import Link from 'next/link';

interface Props {
    products: Product[];
    setVisability: (value: boolean) => void;
}

export const body: FC<Props> = ({ products, setVisability }) => {
    const [inputFieldValue, setInputFieldValue] = useState<string>("");

    const searchResult = useRef<null | HTMLDivElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputFieldValue(e.target.value)
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        const key = e.key;
        if (key == "Enter" && searchResult.current != null) {
            searchResult.current.firstElementChild.click();
        }
    }

    const handleClearButton = (e: MouseEvent<HTMLButtonElement>) => {
        setInputFieldValue("")
    }

    const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
        setVisability(false)
    }

    const searchFilter = (product: Product, index: number) => {
        if (inputFieldValue != "" && (product.title.toLowerCase().includes(inputFieldValue) || product.title_ar.includes(inputFieldValue) || product.discription.toLowerCase().includes(inputFieldValue) || product.discription_ar.includes(inputFieldValue) || product.keywords?.toLowerCase().includes(inputFieldValue) || product.lable.includes(inputFieldValue))) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div className='fixed top-0 left-0 z-50 w-screen min-h-screen bg-black bg-opacity-30 backdrop-blur-sm'>
            <div className='py-7 flex items-center justify-center px-3 bg-secondary-color flex items-center justify-between'>
                <div className='ml-auto max-w-lg flex-1 relative mr-2'>
                    <div className='flex bg-secondary w-full p-2 rounded-md'>
                        <input className='flex-1 w-full outline-none bg-secondary' type='text' autoFocus={1} placeholder='search' onChange={handleInputChange} onKeyPress={handleKeyPress} value={inputFieldValue} />
                        <button onClick={handleClearButton}>{inputFieldValue == '' ? <SearchIcon /> : <CloseIcon />}</button>
                    </div>
                    <div ref={searchResult} className='bg-secondary rounded-md max-h-[70vh] overflow-auto absolute w-full mt-2 flex flex-col top-full'>
                        {products.filter(searchFilter).map((product: Product, index: number) => (
                            <Link onClick={handleClose} key={index} className="flex p-2 rounded-md transition-all items-center hover:bg-gray-300" href={`/product/${product._id}`}>
                                <div className='mr-2'><SearchIcon /></div>
                                <span className='flex-1'>{product.title}</span>
                                {/* <span className='text-primary-color'>{product.lable}</span> */}
                                <img className="max-w-[100px] ml-2 rounded-md" src={`${process.env.URL}/${product.imageUrl}`} alt={product.title} />
                            </Link>
                        ))}
                    </div>
                </div>
                <button onClick={handleClose} className='ml-auto mr-5 text-white fill-white hover:-translate-y-1 transition-all'><CloseIcon /></button>
            </div>
        </div>
    )
}
