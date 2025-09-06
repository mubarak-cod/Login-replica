"use client";
import React, { useState } from "react";

const SignInCodePage = () => {
  const [email, setEmail] = useState("");

  const handleSendCode = () => {
    // alert(`Code sent to ${email}`);
    // Add your code logic here
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/back.png')" }} // replace with your background image path
    >
      <div className="w-full max-w-md bg-gray-900/90 backdrop-blur-md rounded-lg shadow-lg p-8 sm:p-10 flex flex-col items-center text-white">
        {/* Microsoft Logo */}
        <img
          src="/image.png" // replace with your Microsoft logo path
          alt="Microsoft Logo"
          className="w-24 h-auto mb-6"
        />

        {/* Email Display */}
        {/* <div className="w-full bg-gray-800 rounded-md py-3 px-4 text-center font-medium mb-6 break-all">
          {email}
        </div> */}

        {/* Page Title */}
        <h1 className="text-xl sm:text-2xl font-semibold text-center mb-4">
          Get a code to sign in
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-center mb-6 text-sm sm:text-base">
          Because you're accessing sensitive info, we'll send a code to{" "}
          <span className="font-medium">{email}</span> to verify your identity.
        </p>

        {/* Send Code Button */}
        <button
          onClick={handleSendCode}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors mb-4"
        >
          Send code
        </button>

        {/* Other ways to sign in */}
        <button className="text-blue-400 hover:underline text-sm sm:text-base">
          Other ways to sign in
        </button>
      </div>
    </div>
  );
};

export default SignInCodePage;
