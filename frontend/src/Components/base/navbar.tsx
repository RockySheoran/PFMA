// "use client"
// import Link from 'next/link';
// import React, { useState, useEffect, useRef } from 'react';
// import LogoutModal from '../Auth/LogoutModal';
// import { signOut } from 'next-auth/react';

// const NavbarComponent = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//     const handleLogout = () => {
//       signOut({ redirect: true, callbackUrl: "/login" })
//     }

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Close menu when clicking a link
//   const handleLinkClick = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="" className="flex items-center space-x-3">
         
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             PFMA
//           </span>
//         </a>
//         <div className="flex md:order-2 space-x-3 md:space-x-0">
//           <Link href="/login">
//             <button
//               type="button"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//               Login 
//             </button>
//           </Link>
//             <button
//             onClick={handleLogout}
//               type="button"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//              LogOut
//             </button>
//           <button
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             onClick={toggleMenu}
//             aria-controls="navbar-cta"
//             aria-expanded={isMenuOpen}>
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14">
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           ref={menuRef}
//           className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
//             isMenuOpen ? "block" : "hidden"
//           }`}
//           id="navbar-cta">
//           <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <a
//                 href="#"
//                 onClick={handleLinkClick}
//                 className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
//                 aria-current="page">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 onClick={handleLinkClick}
//                 className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 onClick={handleLinkClick}
//                 className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 onClick={handleLinkClick}
//                 className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// };

// export default NavbarComponent;

"use client" // Mark this component as a client component

import React, { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"
import LogoutModal from "../Auth/LogoutModal"
import { signOut } from "next-auth/react"

interface NavbarProps {
  session: any // Replace `any` with a proper type for your session data
}

export default function NavbarComponent({ session }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    signOut({ redirect: true, callbackUrl: "/login" })
  }

  return (
    <>
      <LogoutModal open={open} setOpen={setOpen} />
      <nav className="flex justify-between items-center h-14 p-2 w-full static top-0">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
          PFMA
        </h1>
        <DropdownMenu>
          <DropdownMenuTrigger>
            {session ? (
              <UserAvatar user={session.user} />
            ) : (
              <p>You are not signed in</p>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpen(true)}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  )
}