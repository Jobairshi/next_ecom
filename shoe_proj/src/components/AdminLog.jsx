"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

export default function AdminLog() {

    const  emailRef = useRef();
    const passRef = useRef();
    const router = useRouter();

    const handleSubmit = async (event)=>{


        event.preventDefault();

        try{
            const login = await axios.post("http://localhost:4000/adminlogin", {
                email: emailRef.current.value,
                password: passRef.current.value
            })
            if(login.data.token !== null)
            {
                alert("Login successful");
                localStorage.setItem("Admintoken", login.data.token);
                router.push("/adminDashboard");
            }
        }
        catch(err)
        {
            alert("An error occurred while logging in");
        }

    }

  return (
    <div>
      <div class="flex flex-wrap">
        <div class="flex w-full flex-col md:w-1/2">
          <div class="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
            <a
              href="#"
              class="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900"
            >
              {" "}
              Damasus .{" "}
            </a>
          </div>
          <div class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
            <p class="text-left text-3xl font-bold">Welcome back, Admin</p>
            <p class="mt-2 text-left text-gray-500">
              Welcome back, please enter your details.
            </p>
            <button class="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
              <img
                class="mr-2 h-5"
                src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
                alt
              />{" "}
              Log in with Google
            </button>
            <div class="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div class="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">
                or
              </div>
            </div>
            <form onSubmit={handleSubmit} class="flex flex-col pt-3 md:pt-8">
              <div class="flex flex-col pt-4">
                <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input
                    ref={emailRef}
                    type="email"
                    id="login-email"
                    class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="mb-12 flex flex-col pt-4">
                <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input
                    ref={passRef}
                    type="password"
                    id="login-password"
                    class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
              >
                Log in
              </button>
            </form>
            
          </div>
        </div>
        <div class="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
          <div class="absolute bottom-0 z-10 px-8 text-white opacity-100">
            <p class="mb-8 text-3xl font-semibold leading-10">
              We work 10x faster than our compeititors and stay consistant.
              While theyre bogged won with techincal debt, were realeasing new
              features.
            </p>
            <p class="mb-4 text-3xl font-semibold">John Elmond</p>
            <p class="">Founder, Emogue</p>
            <p class="mb-7 text-sm opacity-70">Web Design Agency</p>
          </div>
          <img
            class="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
            src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </div>
      </div>
    </div>
  );
}
