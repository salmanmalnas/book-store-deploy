import React from 'react'

function Cards({item , width}) {
  return (
    <>
      <div className="mt-4 my-4">
        <div className={`card bg-base-100 ${width} shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white border border-white`}>
            <figure>
                <img
                src={item.image}
                alt="Books" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item.name}
                <div className="badge bg-orange-500 border border-orange-500">{item.category}</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">${item.price}</div>
                    <div className="cursor-pointer px-2 py-2 border border-dark badge badge-outline hover:bg-orange-500 hover:text-white">By Now</div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cards;