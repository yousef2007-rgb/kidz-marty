import React from "react";
import axios from "axios";
import { search as Search } from "@/components/search/index";
import { authIcon as AuthIcon } from "@/public/icons/authIcon";
import { cartButton as CartButton } from "./cartButton";
import Navigation from "./navigation";
import MobileNavigation from "./mobileNavigation";
import Link from "next/link";

const getCategories = async () => {
  const categories = await axios.get(`${process.env.URL}/api/categories`);
  return categories.data;
};

const header = async () => {
  const categories = await getCategories();
  const links = [];
  for (let i = 0; i < categories.length; i++) {
    links.push({
      text: categories[i].title,
      link: `/category/${categories[i]._id}`,
    });
  }
  return (
    <header className="py-3 h-28 font-medium px-2 flex fixed top-0 left-0 z-50 bg-white w-screen items-center justify-between">
      <div className="sm:hidden flex">
        <MobileNavigation links={links} />
        <CartButton />
      </div>
      <Link href={"/"} className="min-h-[80px] mx-auto sm:mx-0 ">
        <img src="/images/logo.png" alt="kidzmarty logo" />
      </Link>

      <Navigation links={links} />

      <div className="flex">
        <Search />
        <span className="sm:flex hidden">
          <CartButton />
        </span>
        <Link
          href={"/user"}
          className="mx-4 hover:-translate-y-1 transition-all"
        >
          <AuthIcon />
        </Link>
      </div>
    </header>
  );
};

export default header;
