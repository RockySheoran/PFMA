
import Link from "next/link";
import React from "react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Register from "@/Components/Auth/Register";

export default async function register() {
  // const session = await getServerSession(authOptions);
  // if (session !== null) {
  //   redirect("/dashboard");
  // }
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <div className="w-full px-10 md:w-[550px] shadow-neutral-800   rounded-xl py-5 bg-white ">
        <div>
          <h1 className="text-4xl text-center font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
            PFMA
          </h1>
          <h1 className="text-3xl font-bold">Register</h1>
          <p>Start clashing now</p>
        </div>
        <Register />
        <p className="text-center mt-2">
          Already have an account ?{" "}
          <strong>
            <Link href="/login">Login</Link>
          </strong>
        </p>
      </div>
    </div>
  )
}