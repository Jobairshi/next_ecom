import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'

export default function ProDelete({prod}) {
//  console.log(prod)

  
  async function Prodelete()
  {
    
    const ret =  Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        
        const response = axios.delete(`http://localhost:4000/product/${prod.id}`)
        .then((res) => {
          console.log(res)
        })
      } else {
        
      }
    });
    

   //

  }

  return (
    <div className='container'>
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
          <div onClick={Prodelete} className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-black group-hover:text-white">
            Delete
          </div>
        </button>
      </div>
    </div>
  )
}
