import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Cards from './Cards'
//import list from "../../public/list.json"
import {Link} from "react-router-dom"
import axios from "axios"

const Books = () => {
  const [book, setBook]= useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res= await axios.get("http://localhost:4004/book");
        setBook(res.data)
      } catch(error){
        console.log("Error from get : ", error)
      }
    };
    getBook();
  },[]);

  return (
    <>
      <Navbar />

        <div className="pt-28 min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 items-center justify-center text-center">
            <div className="">
                <h1 className="text-2xl md:text-4xl font-semibold">We are delighted to have you 
                    <span className="text-orange-500"> Here :)</span> 
                </h1>
                <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum 
                    imperdiet. Duis sagittis ipsum. Praesent mauris.Sed cursus ante dapibus diam. Sed nisi. 
                    Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                </p>
                <Link to="/">
                  <button className="text-white hover:bg-orange-600 bg-orange-500 px-4 py-2 rounded mt-6">Back</button>
                </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-center">
                {book.map((item) => (
                    <Cards key={item.id} item={item} width="w-68 md:w-64" />
                ))}
            </div>
        </div>
        

      <Footer />
    </>
  )
}

export default Books
