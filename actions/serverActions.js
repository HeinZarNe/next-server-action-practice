"use server";

import { revalidateTag } from "next/cache";

export const registerStudent = async (formData) => {
  const student = formData.get("name")?.toString();
  const phoneNumber = formData.get("phoneNumber")?.toString();

  if (!student || !phoneNumber) return;

  const dataToPost = {
    name: student,
    phoneNumber,
  };
  try {
    const res = await fetch(
      "https://655cb18025b76d9884fdcc83.mockapi.io/students",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(dataToPost),
        next: revalidateTag("students"),
      }
    );

    return res.json();
  } catch (error) {
    throw error;
  }
};

export const getStudents = async () => {
  try {
    const res = await fetch(
      "https://655cb18025b76d9884fdcc83.mockapi.io/students",
      { cache: "no-cache", next: { tags: ["students"] } }
    );

    return res;
  } catch (error) {
    throw error;
  }
};
