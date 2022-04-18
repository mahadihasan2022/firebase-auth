import React, { useState } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const Navber = () => {
  const [open, setOpen] = useState(false);

  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
      signOut(auth);
  }

  const routes = [
    { id: 1, name: "Home", link: "/Home" },
    { id: 2, name: "CheckOut", link: "/CheckOut" },
    { id: 3, name: "Blogs", link: "/Blogs" },
    { id: 4, name: "Login", link: "/Login" },
    { id: 6, name: "SingUp", link: "/SingUp" },
    { id: 5, name: "Abouts", link: "/Abouts" },
  ];

  return (
    <nav className="md:bg-black h-full">
      <div
        onClick={() => setOpen(!open)}
        className="h-8 w-8 md:hidden sm:text-black"
      >
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <div className="flex md:pl-16 items-center">
      <div className="sm:text-center">
      <h1 className="text-2xl md:text-white font-bold pr-12"> MADCARE </h1>
      </div>
      <ul
        className={`md:flex md:h-12 md:pl-8 items-center md:bg-black justify-center font-bold absolute md:static duration-1000 ease-in ${open ? 'top-8' : 'top-[-120px]' }
        `}
      >
        {routes.map((route) => (
          <HeaderLink key={route.id} route={route}></HeaderLink>
        ))}

{
                    user ?
                    <button className="text-white font-bold" onClick={handleSignOut}>Sign out</button>
                    :
                    <Link to="/login">Login</Link>}
      </ul>
      </div>
    </nav>
  );
};

export default Navber;