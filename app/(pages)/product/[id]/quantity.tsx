"use client"
import React, { useState } from 'react'
import { addToCart as AddToCart } from './addToCart';
import { Item } from '@/types/productsTypes';

export const quantity = ({item}: {item:Item}) => {
    const [counter, setCounter] = useState(1);
    const handleIncrease = () => {
        setCounter(counter + 1)
    }
    const handleDecrease = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    return (
        <>
            <div className='flex font-semibold bg-white my-4 rounded-md'>
                <button className="p-3  rounded-l-lg bg-secondary-color text-white" onClick={handleDecrease}>-</button>
                <p className='flex-1 text-center p-3'>{counter}</p>
                <button className="p-3 rounded-r-lg bg-secondary-color text-white" onClick={handleIncrease}>+</button>

            </div>
            <AddToCart item={{...item, quantity: counter}} />
        </>
    )
}
