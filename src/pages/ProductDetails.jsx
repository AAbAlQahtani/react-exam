import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function ProductDetails() {
    const [product, setProduct] = useState("")
    const { id } = useParams()
    const URL = "https://fakestoreapi.com/products"
    useEffect(() => {
        axios.get(`${URL}/${id}`).then((res) => {

            setProduct(res.data)
        })
    }, [id])
    return (
        <section className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
        <div className=' max-w-sm w-full bg-white rounded-xl shadow-lg flex flex-col items-center overflow-hidden hover:shadow-xl transition-all'>

            <p className=' text-xl font-bold text-gray-900'>{product.title}</p>
            <p className='text-2xl font-bold text-gray-900'>{" $"}{product.price}</p>
            <img className='h-80 object-cover ' src={product.image} alt={product.title} />
            <p className='text-sm text-gray-600 ml-1'>{product.description}</p>
            <button className='cursor-pointer bg-amber-300 hover:bg-amber-400  py-1 rounded-4xl px-7 m-3 transition-colors'>Add to cart</button>
           <Link to="/" ><button className='cursor-pointer bg-[#2F6CA7] hover:bg-[#6081a1] text-white font-medium mb-3 py-1 rounded-4xl px-7 transition-colors'>Back to Home</button></Link>
        </div>
        </section>
    )
}
