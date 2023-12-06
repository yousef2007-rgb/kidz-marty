"use client"
import React, { FC } from 'react'
import { useAppContext } from '@/app/AppContext'
import { Item, ItemWithQuantity } from '@/types/productsTypes';
import { quantity } from './quantity';

export const addToCart = ({ item }: { item: ItemWithQuantity }) => {
    const context = useAppContext();
    console.log(context.state)
    const handleAddToCart = () => {
        const oldItem = context.state.cart.find((i: ItemWithQuantity) => i == item)
        if (!oldItem) {
            context.setLocalStorage({ cart: [...context.state.cart, item] })
        } else {
            const array = context.state.cart.slice()
            array.splice(context.state.cart.indexOf(oldItem), 1, { ...oldItem, quantity: oldItem.quantity + item.quantity });

            context.setLocalStorage({ cart: array })
        }
    }

    return (
        <button onClick={handleAddToCart} className='bg-secondary-color text-white capitalize w-full rounded-md font-semibold my-4 border-2 border-secondary-color p-3 hover:bg-transparent hover:text-secondary-color'>add to cart</button>
    )
}
