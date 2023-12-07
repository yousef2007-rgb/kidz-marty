"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import Link from "next/link";
import axios from "axios";

const page = (props: {}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const cookies = useCookies();

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      router.push("/");
    }
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const token = await axios.post(`${process.env.URL}/api/auth`, {
        email: email,
        password: password,
      });
      console.log(token);
      cookies.set("token", token.data);
      router.push("/cart");
    } catch (err: any) {
      if (err.response.status == 400) {
        setError(err.response.data);
      } else {
        alert("something went wrong try again");
      }
    }
  };

  return (
    <div className="flex flex-col w-full  min-h-screen bg-hero bg-no-repeat bg-cover">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 flex flex-col justify-center  shadow-md w-full ml-auto sm:w-[50vw] min-h-screen"
      >
        <h1 className="text-xl font-bold">Sign In</h1>

        <div className="mt-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-2 border rounded-md focus:border-blue-500"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full p-2 border rounded-md focus:border-blue-500"
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-purple text-white font-bold p-2 rounded-md w-full hover:bg-white border-2 border-purple hover:text-purple transition-all"
          >
            Sign In
          </button>
        </div>

        {error != "" ? (
          <span className="bg-red-300 my-5 text-red-500 p-5 w-full text-center rounded-md">
            {error}
          </span>
        ) : (
          ""
        )}
        <span className="capitalize mt-5">
          don't have an account?{" "}
          <Link className="text-blue-400 hover:underline" href={"/signup"}>
            sign up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default page;
