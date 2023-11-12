import axios from 'axios'
import Link from 'next/link';
import React from 'react'
import { Product } from '@/types/productsTypes';
import { quantity as Quantity } from './quantity';
import { imageSlider as ImageSlider } from './imageSlider';

const getProduct = async (_id: string) => {
    const res = await axios.get(`${process.env.URL}/api/products/${_id}`);
    return res.data;
}

const page = async ({ params }: { params: { id: string } }) => {
    const productData: Product = await getProduct(params.id);
    return (
        <main className='flex sm:flex-row flex-col flex-1 relative w-full'>
            <ImageSlider productData={productData} />
            <article className='sm:w-1/2 my-5 w-full px-5'>
                <h1 className='font-medium mb-4 text-3xl'>{productData.title}</h1>
                <h2 className='my-4 font-medium '>Item No: {productData.lable}</h2>
                <Link href={`/brand/${productData.brand._id}`} className='font-medium flex capitalize my-4'><span>Brand:</span> <span className='text-secondary-color hover:underline ml-2'>{productData.brand.title}</span></Link>
                <Link href={`/category/${productData.category._id}`} className='font-medium flex capitalize my-4'><span>Category:</span> <span className='text-secondary-color hover:underline ml-2'>{productData.category.title}</span></Link>
                <Link href={`/ageRange/${productData.ageRange}`} className='font-medium capitalize flex my-4'><span>age range:</span> <span className='text-secondary-color hover:underline ml-2'>{productData.ageRange}</span></Link>
                <p className='my-4'>{productData.discription}</p>

                <div className='text-xl font-semibold border-gray-300 w-full border-t pt-4 flex'>
                    {productData.discount != 0 ? <span className='text-red-500 mr-2'>-{productData.discount}%</span> : ""}
                    <p className=''>{productData.discount == 0 ? productData.online_price : productData.online_price - (productData.online_price * productData.discount / 100)}JOD</p>
                </div>
                {productData.discount != 0 ?
                    <p className='capitalize line-through text-gray-500 through font-medium'>list price: {productData.online_price}</p>
                    : ""}
                {!productData.isInStock ? <p className='font-medium capitalize text-red-500 my-4 text-center'>out of stock</p> : ""}
                {productData.dimensions && productData.dimensions.length != 0 ?
                    <div className='flex flex-col my-4'>
                        <span className='capitalize font-medium mr-2'>dimensions:</span>
                        <select className='font-medium outline-none flex-1 mt-2 text-center bg-white rounded-md px-3 py-2'>
                            {productData.dimensions.map((dimension, index) => (
                                <option key={index}>{dimension}</option>
                            ))}
                        </select>
                    </div>
                    : ""}
                <Quantity />
                <button className='bg-secondary-color text-white capitalize w-full rounded-md font-semibold my-4 border-2 border-secondary-color p-3 hover:bg-transparent hover:text-secondary-color'>add to cart</button>
                {productData.varients && productData.varients.length != 0 ? <>
                    <h1 className='font-medium mt-5 mb-2 text-xl'>Varients:</h1>
                    <div className='flex flex-wrap'>
                        {productData.varients.map((varient, index) => (
                            <Link href={`/product/${productData._id}/varient/${varient._id}`} className='max-w-[150px] flex rounded-md flex-1 mr-2' key={index}><img loading='lazy' className=' aspect-square rounded-md object-cover w-full' src={`${process.env.URL}/${varient.imageUrl}`} alt={varient.title} /></Link>
                        ))}
                    </div>
                    </> : ""}
            </article>
        </main >
    )
}

export default page;
