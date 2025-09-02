"use client";
import React, { Suspense } from "react";
import Password from "./PasswordContent"; 

export default function PasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Password />
    </Suspense>
  );
}
