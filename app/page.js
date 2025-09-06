"use client";

import Image from "next/image";
import { FaMicrosoft, FaYahoo } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-900 text-white p-8 rounded-lg w-96 shadow-2xl shadow-white/2">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          <span className="text-white">Docu</span>
          <span className={`${pacifico.className} text-white-400`}>
            Sign
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-center mb-6">
          To read the document, please choose your email provider below:
          Login to view shared file.
        </p>

        {/* Buttons */}
        <div className="space-y-3 cursor-pointer">
          <button
            onClick={handleLogin}
            className="w-full flex items-center gap-2 py-2 px-3 bg-red-600 hover:bg-red-700 rounded text-white font-medium"
          >
           
            <Image
              src="/soft.png" // 👈 put outlook.png inside /public/icons/
              alt="Outlook"
              width={20}
              height={20}
            />
            Login with Office365
          </button>

          {/* Outlook with image */}
          <button
            onClick={handleLogin}
            className="w-full flex items-center gap-2 py-2 px-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium"
          >
            <Image
              src="/all.png" // 👈 put outlook.png inside /public/icons/
              alt="Outlook"
              width={20}
              height={20}
            />
            Login with Outlook
          </button>

          {/* AOL with image */}
          <button
            onClick={handleLogin}
            className="w-full flex items-center gap-2 py-2 px-3 bg-gray-600 hover:bg-gray-700 rounded text-white font-medium"
          >
            <Image
              src="/aol.png" // 👈 put aol.png inside /public/icons/
              alt="AOL"
              width={20}
              height={20}
            />
            Login with AOL
          </button>

          <button
            onClick={handleLogin}
            className="w-full flex items-center gap-2 py-2 px-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-medium"
          >
             <Image
              src="/yahoo.png" // 👈 put aol.png inside /public/icons/
              alt="AOL"
              width={20}
              height={20}
            />
            Login with Yahoo
          </button>

          <button
            onClick={handleLogin}
            className="w-full flex items-center gap-2 py-2 px-3 bg-yellow-500 hover:bg-yellow-600 rounded text-black font-medium"
          >
            <MdEmail size={20} />
            Login with Other
          </button>
        </div>

        {/* Footer text */}
        <p className="text-xs text-center text-gray-300 mt-6">
          Effortlessly access your files across any device from anywhere and
          securely share and collaborate on them with others using DocuSign,
          your centralized and reliable cloud-based document sharing platform.
        </p>
      </div>
    </div>
  );
}