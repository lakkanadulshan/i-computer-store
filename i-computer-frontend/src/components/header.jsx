import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className=" w-full h-[75px] bg-accent flex items-center ">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-30 h-full object-contain"
        />
        <div className="w-full h-full-50 flex  items-center justify-center gap-10 text-lg">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
