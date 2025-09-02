"use client";

import { FaMicrosoft, FaYahoo, FaEnvelope } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-lg w-96 shadow-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">
          <span className="text-white">Docu</span>
          <span className="italic text-yellow-400">Sign</span>
        </h1>

        <p className="text-sm text-center mb-6">
          To read the document, please choose your email provider below:
          Login to view shared file.
        </p>

        <div className="space-y-3 cursor-pointer">
          <button
            onClick={handleLogin}
            className="w-full flex items-center gap-2 py-2 px-3 bg-red-600 hover:bg-red-700 rounded text-white font-medium"
          >
            <FaMicrosoft size={20} />
            Login with Office365
          </button>

          <button
            onClick={handleLogin}
            className="w-full flex items-center gap-2 py-2 px-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium"
          >
            <FaEnvelope size={20} />
            Login with Outlook
          </button>

          <button
            onClick={handleLogin}
            className="w-full flex items-center gap-2 py-2 px-3 bg-gray-600 hover:bg-gray-700 rounded text-white font-medium"
          >
            <MdEmail size={20} />
            Login with AOL
          </button>

          <button
            onClick={handleLogin}
            className="w-full flex items-center gap-2 py-2 px-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-medium"
          >
            <FaYahoo size={20} />
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

        <p className="text-xs text-center text-gray-300 mt-6">
          Effortlessly access your files across any device from anywhere and
          securely share and collaborate on them with others using DocuSign,
          your centralized and reliable cloud-based document sharing platform.
        </p>
      </div>
    </div>
  );
}
