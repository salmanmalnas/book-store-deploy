import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import contact from '../../public/contact-us.jpg'; 
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
    const reviews = [
        "A wonderful bookstore with an excellent collection. The staff is incredibly helpful!",
        "Found the perfect book I was looking for! The service was top-notch.",
        "Great location and an amazing atmosphere. Will definitely visit again!",
        "A fantastic place with a diverse range of books. Highly recommended!",
        "The ambiance is perfect for reading. The staff is friendly and knowledgeable.",
        "I always find something new and exciting here. A gem in the city!",
        "The best bookstore experience I've had in years. A must-visit!",
        "A cozy spot with a great selection. I could spend hours here!",
        "Wonderful service and a great variety of books. Will return soon!",
        "The perfect place for book lovers. A true treasure trove!"
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <Navbar />
            <div className="about-container dark:bg-slate-900 dark:text-white px-4 mt-16 py-8">
                <div className="flex flex-col-reverse md:flex-row md:space-x-4">
                    {/* Left Section: About Us and Customer Reviews */}
                    <div className="flex flex-col space-y-8 w-full md:w-1/2">
                        
                        {/* About Us Top*/}
                        <div className="md:order-1">
                            <h2 className="text-3xl font-bold mb-4 text-orange-500">About Us</h2>
                            <p className="mb-4">
                                Welcome to our bookstore! We are dedicated to providing a wide range of books to suit every taste and interest. Our mission is to foster a love for reading and to make books accessible to everyone.
                            </p>
                            <p className="mb-4">
                                Located in the heart of Hyderabad, we pride ourselves on offering personalized service and a curated selection of titles. Whether you're looking for the latest bestseller or a rare find, we're here to help.
                            </p>
                        </div>

                        {/* Customer Reviews 2-Top*/}
                        <div className="md:order-2">
                            <h3 className="text-2xl font-bold mb-4 text-orange-500">Customer Reviews</h3>
                            <div className="slider-container">
                                <Slider {...settings} className="review-slider">
                                    {reviews.map((review, index) => (
                                        <div key={index} className="p-4 bg-white dark:bg-slate-900 rounded shadow">
                                            <p className="text-lg italic">{`"${review}"`}</p>
                                            <p className="text-right mt-2">- Reviewer {index + 1}</p>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Image */}
                    <div className="order-1 flex justify-center items-center w-full md:w-1/2">
                        <img 
                            src={contact} 
                            alt="Contact Us" 
                            className="h-auto max-w-full md:max-w-md rounded-lg shadow-md"
                        />
                    </div>
                </div>

                {/* Back Button */}
                <div className="flex justify-center mt-8">
                    <Link to="/" className="btn text-white hover:text-black bg-orange-500 px-4 py-2 rounded">
                        Back to Home
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
