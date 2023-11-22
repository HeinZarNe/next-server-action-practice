"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    const home = setTimeout(() => router.refresh(), 1000);

    return () => {
      clearTimeout(home);
    };
  }, []);
  return (
    <div className="text-3xl text-red-500 text-bold">
      Somehting went wrong. Try again
    </div>
  );
};

export default Error;
