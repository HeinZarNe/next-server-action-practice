"use client";
import { registerStudent } from "@/actions/serverActions";
import { useRef, useTransition } from "react";

const AddProductForm = () => {
  const [isPending, startTransition] = useTransition();
  const formRef = useRef(null);
  return (
    <form
      ref={formRef}
      action={(form) => {
        startTransition(() =>
          registerStudent(form).then((status) => {
            status == "400" && alert("SOmething went erong");
            formRef.current?.reset();
          })
        );
      }}
      className="flex flex-col gap-2 items-center m-5 p-5 bg-stone-100  rounded-md"
    >
      <div className="flex flex-row gap-3 items-center ">
        <input
          name="name"
          placeholder="Mg Mg"
          type="string"
          required
          className="border border-slate-400 px-3 py-2 rounded-md"
        />
        <input
          name="phoneNumber"
          type="number"
          required
          placeholder="09 123 456 789"
          className="border border-slate-400 px-3 py-2 rounded-md"
        />
      </div>

      <button
        disabled={isPending}
        className="px-3 py-2 bg-green-600 text-white text-lg rounded-md"
      >
        {isPending ? "Please Wait" : "Register"}
      </button>
    </form>
  );
};

export default AddProductForm;
