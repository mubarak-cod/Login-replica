"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function AnimationPage() {
    const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [router]);
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-white">
      <DotLottieReact
        src="https://lottie.host/ebc216aa-1113-495e-b5bb-9fe6a4c398bd/ucAN8vvqn1.lottie"
        loop
        autoplay
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
}
