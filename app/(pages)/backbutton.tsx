"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function backbutton() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  if (pathname != "/" ) {
    return (
      <button
        onClick={() => router.back()}
      className="flex items-center px-4 py-2 font-semibold  w-fit mx-3 text-gray-900 rounded hover:bg-gray-300 transition duration-300 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </button>    );
  } else {
    return <h1></h1>;
  }
}
