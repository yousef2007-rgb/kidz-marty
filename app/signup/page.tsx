"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import Link from "next/link";
import axios from "axios";
import { User, UserWithoutId } from "@/types/productsTypes";

const page = (props: {}) => {
  const router = useRouter();
  const [formData, setFormData] = useState<UserWithoutId>({
    username: "",
    email: "",
    password: "",
    phone: "",
    city: "Amman",
    location: "",
    repeat_password: "",
    age: 18,
  });
  const [error, setError] = useState<string>("");

  const cookies = useCookies();

  useEffect(() => {
    const token = cookies.get("verification-token-kidz-marty");
    if (token) {
      router.push("/");
    }
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const token = await axios.post(`${process.env.URL}/api/users`, {
        ...formData,
      });
      console.log(token);
      cookies.set("verification-token-kidz-marty", token.data);
      router.push("/cart");
    } catch (err: any) {
      if (err.response.status == 400) {
        setError(err.response.data);
      } else {
        alert("something went wrong try again");
      }
    }
  };

  const handleFieldChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex flex-col w-full  min-h-screen bg-hero bg-no-repeat bg-cover">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 flex flex-col justify-center  shadow-md w-full ml-auto sm:w-[50vw] min-h-screen"
      >
        <h1 className="text-xl font-bold">Sign Up</h1>
        <div className="mt-4">
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={formData.username}
            name="username"
            onChange={handleFieldChange}
            className="w-full p-2 border rounded-md focus:border-orange"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            name="email"
            onChange={handleFieldChange}
            className="w-full p-2 border rounded-md focus:border-orange"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            className="w-full p-2 border rounded-md focus:border-orange"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2">Repeat Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.repeat_password}
            name="repeat_password"
            onChange={handleFieldChange}
            className="w-full p-2 border rounded-md focus:border-orange"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phonenumber"
            value={formData.phone}
            name="phone"
            onChange={handleFieldChange}
            className="w-full p-2 border rounded-md focus:border-orange"
            pattern="[0-9]{9}"
            required
          />
          <small>Format: 791234567</small>
        </div>
        <div className="mt-4">
          <label className="block mb-2">City</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleFieldChange}
            className="w-full p-2 border rounded-md focus:border-orange"
          >
            <option value="Amman">Amman</option>
            <option value="Zarqa">Zarqa</option>
            <option value="Irbid">Irbid</option>
          </select>
        </div>{" "}
        <div className="mt-4">
          <label className="block mb-2">Location</label>
          <input
            type="text"
            placeholder="Enter your Location"
            value={formData.location}
            name="location"
            onChange={handleFieldChange}
            className="w-full p-2 border rounded-md focus:border-orange"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2">Age</label>
          <input
            type="number"
            placeholder="Enter your Location"
            value={formData.age}
            name="age"
            onChange={handleFieldChange}
            className="w-full p-2 border rounded-md focus:border-orange"
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-orange text-white font-bold p-2 rounded-md w-full hover:bg-white border-2 border-orange hover:text-orange transition-all"
          >
            Sign Up
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
          already have an account?{" "}
          <Link className="text-blue-400 hover:underline" href={"/signin"}>
            sign in
          </Link>
        </span>
      </form>
    </div>
  );
};

export default page;
