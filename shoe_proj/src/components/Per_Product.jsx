import axios from 'axios'
import React from 'react'

export default function Per_Product({prod}) {
//  console.log(prod)

  function AddToCart()
  {
    const token = localStorage.getItem("token");
    const response = axios.post("http://localhost:4000/orders",{
      token:token,
      prodId:prod.id
    })
    
    alert("Product added to cart")
    console.log(response);
  }


  return (
    <div>
        <div className="relative flex flex-col overflow-hidden rounded-lg border">
        <div className="aspect-square overflow-hidden">
          <img
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
            src={prod.img_link}
            alt=""
          />
        </div>
        <div className="absolute top-0 m-2 rounded-full bg-white">
          <p className="rounded-full bg-gray-600 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
            Sale
          </p>
        </div>
        <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div className="mb-2 flex">
            <p className="mr-3 text-sm font-semibold">${prod.price}</p>
            <del className="text-xs text-gray-400"> ${prod.price + 30} </del>
          </div>
          <h1 className="mb-2 text-md text-gray-400 font-bold">{prod.name}</h1>
          <p className="mb-2 text-sm text-gray-400  overflow-hidden overflow-ellipsis whitespace-nowrap">{prod.desc}</p>
        </div>
        <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div onClick={AddToCart} className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-black group-hover:text-white">
            Add
          </div>
          <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-gray-400 group-hover:text-white">
            +
          </div>
        </button>
      </div>
    </div>
  )
}
