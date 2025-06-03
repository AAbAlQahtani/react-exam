import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Home() {


    const [products, setProducts] = useState([])
    const [searchTitle, setSearchTitle] = useState("")




    const URL = "https://fakestoreapi.com/products"

    // useEffect=()=> (
    //     axios.get(URL)
    //     .then((res) => {
    //         setProducts(res.data)
    //     })

    // )

    useEffect(() => {
        axios.get(URL).then((res) => {
            setProducts(res.data)
        })
    }, [])

    const SearchBtn = () => {
    const searchTerm = e.target.value;
    setSearchTitle(searchTerm)

    const filteredItems = users.filter((u) =>
    u.Title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    setProducts(filteredItems);
  }


        // const result = products.find((u) => (u.title == title))
        // setProducts(result)



    return (
        <>
            <img src="https://m.media-amazon.com/images/I/71h15GsHkvL._SX3000_.jpg" alt="" />
            <div className=' bg-gray-300 p-5'>
                {/* <div className='flex items-center justify-center min-h-screen bg-blue-600'> */}
                <div className="flex  mx-10 rounded bg-white w-lg">
                    <input className=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none
                     focus:outline-none " type="search" onChange={(e)=>(setSearchTitle(e.target.value))}   name="search" placeholder="Search..." value={searchTitle} />
                    <button type="submit" onClick={()=>(SearchBtn())} className="m-2 rounded bg-amber-300 hover:bg-amber-400
                        cursor-pointer  px-4 py-2 text-white">
                        <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xml:space="preserve" width="512px" height="512px">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
                {/* </div> */}
            </div>

            <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-300 p-4'>

                {products.map((product) => {
                    return (
                        <div key={product.id} className=' bg-white flex flex-col items-center justify-between'>
                            <p className='font-bold mt-2'>{product.title}{" $"}{product.price}</p>
                            <p></p>
                            <img className='h-80 object-cover ' src={product.image} alt={product.title} />

                            <Link to={`productdetails/${product.id}`}><button className='text-[#2F6CA7] hover:text-blue-800 m-4 cursor-pointer'>See all details</button></Link>
                        </div>
                    )
                }
                )}


            </div>
        </>
    )
}
