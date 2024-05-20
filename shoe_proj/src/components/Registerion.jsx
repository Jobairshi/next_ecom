"use client"

import axios from "axios";

import React, { useRef } from "react";

export default function Registerion() {


  const  nameRef = useRef();
  const  emailRef = useRef();
  const  addressRef = useRef();
  const  phoneRef = useRef(); 
  const passRef = useRef();

  const  handleSubmit = async (event)=>{
    event.preventDefault();
    const response = await axios.post('http://localhost:4000/customer', {
      name:nameRef.current.value,
      email:emailRef.current.value,
      address:addressRef.current.value,
      phone:phoneRef.current.value,
      password:passRef.current.value
    });

    console.log(response.data);
  }

  return (
    <div className=" bg-white "> 
      <div className="lg:m-10">
        <form onSubmit={handleSubmit} className="relative border text-stone-950 border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
          <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>
          <div>
            <label className=""> Username </label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Username"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Email Address </label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Info@example.com"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Password </label>
            <input
              ref={passRef}
              type="password"
              placeholder="password"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Address </label>
            <input
              ref={addressRef}
              type="text"
              placeholder="Insert Address"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <div>
              <label className="">
                {" "}
                Phone: <span className="text-sm text-gray-400">
                  (optional)
                </span>{" "}
              </label>
              <input
                ref={phoneRef}
                type="text"
                placeholder="01944242321"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
