import React from 'react';
import banner from '../../public/Banner-img.png'

function Banner() {
  return(
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-16">
          <div className="w-full order-2 md:order-1 md:w-1/2 mt-10 md:mt-12">
            <div className="space-y-10">
              <h1 className="text-4xl font-bold">
                Hello, welcomes to my Book Store ! Explore and shop our <span className="text-orange-500">collection today!!!</span>
              </h1>
              <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et totam. Tempora amet atque expedita, quae corrupti totam</p>
              
              <div className="flex items-center md:w-3/4 gap-2 border border-gray-300 rounded p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                  <input type="text" className="grow p-1 dark:bg-slate-900 outline-none" placeholder="Email" />
              </div>
            </div>

            <div>
              <button className="mt-6 btn text-white hover:text-black bg-orange-500">
                  <a href="mailto:contact@bookstore.com" className="flex items-center justify-center">
                    Contact
                  </a>
              </button>
          </div>

          </div>
          <div className="order-1 w-full md:w-1/2 md:mt-12 md:ml-5">
              <img src={banner} alt="" className="w-95 h-95" />
          </div>
      </div>
    </>
  )
}

export default Banner;