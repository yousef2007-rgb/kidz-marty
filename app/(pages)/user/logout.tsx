"use client";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import React from "react";

export default function logout() {
  const cookies = useCookies();
  const router = useRouter();
  return (
    <button
      onClick={() => {
        cookies.remove("token");
        router.push("/");
      }}
      className="bg-purple text-white font-bold p-2 rounded-md w-full hover:bg-white border-2 border-purple hover:text-purple transition-all"
    >
      LogOut
    </button>
  );
}
