import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function ContactUs() {
    return (
        <>
            <Navbar />
            <div className="contact-container px-4 mt-16 py-8 dark:bg-slate-900 dark:text-white">
                <h1 className="text-3xl font-bold mb-4 mt-2 text-orange-500 text-center">Contact Us</h1>
                <div className="flex flex-col md:flex-row md:justify-between gap-6">                    
                    {/* Contact Info */}
                    <div className="contact-info md:w-1/2">

                        <h3 className="text-2xl text-orange-500 font-semibold mb-4 mt-4">Get in Touch</h3>
                        <p className="mb-6">
                            If you have any questions or need further assistance, feel free to reach out to us through any of the following methods. We’re here to help!
                        </p>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Top Left: Call and WhatsApp */}
                            <div className="flex flex-col gap-6">
                                <div className="contact-item flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded shadow">
                                    <i className="bi bi-telephone text-2xl text-orange-500"></i>
                                    <div>
                                        <h3 className="text-xl font-semibold">Call Us</h3>
                                        <p className="text-lg">+91 8177 932 123</p>
                                    </div>
                                </div>
                                
                                <div className="contact-item flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded shadow">
                                    <i className="bi bi-whatsapp text-2xl text-green-500"></i>
                                    <div>
                                        <h3 className="text-xl font-semibold">WhatsApp</h3>
                                        <p className="text-lg">+91 8177 932 123</p>
                                    </div>
                                </div>
                            </div>

                            {/* Second Row: Email and Address */}
                            <div className="flex flex-col gap-6 mt-4">
                                <div className="contact-item flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded shadow">
                                    <i className="bi bi-envelope text-2xl text-blue-500"></i>
                                    <div>
                                        <h3 className="text-xl font-semibold">Email Us</h3>
                                        <p className="text-lg">contact@bookstore.com</p>
                                    </div>
                                </div>

                                <div className="contact-item flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded shadow">
                                    <i className="bi bi-geo-alt text-2xl text-red-500"></i>
                                    <div>
                                        <h3 className="text-xl font-semibold">Our Address</h3>
                                        <p className="text-lg">123 Book Street, Hyderabad, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="md:w-1/2 flex justify-center items-start mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0209817240984!2d78.37062761009895!3d17.45870983337164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ddb58d1b49%3A0xcfcead772f6ce1c9!2sGoogle%20Hyderabad%20-%20DivyaSree%20Omega!5e0!3m2!1sen!2sin!4v1723577955157!5m2!1sen!2sin"
                            width="100%"
                            height="370"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            className="rounded border dark:border-white"
                        ></iframe>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <Link to="/" className="btn text-white bg-orange-500 hover:bg-orange-600 rounded-md py-2 px-4">
                        Back to Home
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactUs;
