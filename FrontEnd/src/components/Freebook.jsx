import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from 'axios';

function Freebook() {
  const [book, setBook]= useState([]);
  useEffect(()=>{
    const getBook= async () => {
      try{
        const res = await axios.get("http://localhost:4004/book");
        setBook(res.data)
      } catch(error){
        console.log("Error from get : ", error.response || error.message || error)
      }
    };
    getBook();

    const handleResize = () => {
      window.dispatchEvent(new Event('resize'));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  },[]);


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="max-w-screen-2xl container mx-auto ">
          <h1 className="text-xl pb-2">Free offered books</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
        </div>
        <div className="slider-container">
          <Slider {...settings} key={book.length} className="dark:text-white">
            {book.map((item)=>(
              <Cards item={item} key={item.id} width="w-96" />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook