"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Dashboard({ children }) {
  const router = useRouter();
  const token = localStorage.getItem("Admintoken");
  if (token === null) {
    router.push("/adminLog");
  }

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap"
        rel="stylesheet"
      />
      <style jsx>{`
        :root {
          --font-source-sans-pro: "Source Sans Pro", sans-serif;
        }
        main#dashboard-main::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        main#dashboard-main::-webkit-scrollbar-thumb {
          border-radius: 9999px;
          background-color: rgb(156 163 175 / 0.75);
        }
        main#dashboard-main::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px rgb(156 163 175 / 0.75);
          border-radius: 10px;
        }
      `}</style>

      <div className="bg-slate-200 flex h-screen">
        

        <main
          id="dashboard-main"
          className="relative mt-20 w-full overflow-y-auto bg-slate-200 px-4 pb-8 md:ml-64 md:px-10 lg:ml-72 lg:px-12"
        >
          {/* Topbar */}
          <header className="fixed right-0 top-0 z-10 w-full bg-slate-200 md:ml-64 lg:ml-72">
            <div className="relative flex h-20 items-center justify-end space-x-5 px-4 shadow-md md:px-10">
              <button className="hover:bg-slate-300 focus:bg-slate-300 rounded-full border-2 border-transparent p-1.5 text-gray-600 focus:outline-none">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405M19 13h-1.405M13 17h-1.405M5 9V5a2 2 0 012-2h10a2 2 0 012 2v4m-2 8v-6a2 2 0 00-2-2h-4a2 2 0 00-2 2v6M9 17h6"
                  />
                </svg>
              </button>
              <button className="hover:bg-slate-300 focus:bg-slate-300 relative rounded-full border-2 border-transparent p-1.5 text-gray-600 focus:outline-none">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 11a4 4 0 11-8 0 4 4 0 018 0zm4 2a6 6 0 106 6c0-.4-.1-.8-.1-1.2m-.9-4.8a4.98 4.98 0 00-.8-2.4M13 17h6m-6-4h6"
                  />
                </svg>
                <span className="bg-red-600 absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-xs font-semibold text-white">
                  3
                </span>
              </button>
            </div>
          </header>

          {/* Main content */}
          <div className="mt-24">{children}</div>
        </main>
      </div>
    </div>
  );
}
