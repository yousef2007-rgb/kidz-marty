import React from 'react'
import axios from 'axios'
import { Category, Product } from '@/types/productsTypes';
import Link from 'next/link';
import { productCards as ProductCard } from '@/components/product/productCards';

const getProducts = async () => {
    const products = await axios.get(`${process.env.URL}/api/products/?limitPerCategory=4`);
    return products.data;
}

export const body = async (props: {}) => {
    const products = await getProducts();
    return (
        <div className='px-3'>
            <div>
                {products.map((productGroup: { category: Category, products: Product[] }, index: number) => (
                    <div className='flex flex-col my-5'>
                        <h1 className='text-3xl font-bold text-gray-800 mx-auto w-fit my-10 text-center'>{productGroup.category.title}</h1>
                        <div className='flex justify-evenly flex-wrap'>
                            {productGroup.products.map((product: Product, index: number) => (
                                <ProductCard index={index} product={product} />
                            ))}
                        </div>
                        <Link
                            href={`/category/${productGroup.category._id}`}
                            className='capitalize hover:scale-[0.98] transition-all px-8 py-2 rounded-md w-fit text-white font-semibold mx-auto my-10 bg-secondary-color border-2 border-secondary-color hover:text-secondary-color hover:bg-white ease-in-out'>
                            view all
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}