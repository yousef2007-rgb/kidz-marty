import { Product } from '@/types/productsTypes'
import React, { FC } from 'react'
import Link from 'next/link';

interface Props {
    product: Product;
    index:number;
}

export const productCards: FC<Props> = ({ product, index }) => {
    return (
        <Link key={index} href={`/product/${product._id}`} className='text-center hover:-translate-y-3 transition-all justify-between font-medium max-w-[250px] flex flex-col items-center'>
            <img className="w-full rounded-xl h-[150px] object-contain" src={`${process.env.URL}/${product.imageUrl}`} />
            <h2 className='my-2 font-semibold'>{product.title}</h2>
            <h3
                style={product.discount != 0 ? {
                    textDecoration: "line-through",
                    color: "gray"
                } : {}}>
                {product.online_price}JOD
            </h3>
            {product.discount != 0 ? <h4>{product.online_price * product.discount / 100}JOD</h4> : ""}
        </Link>
    )
}
