import { getStudents } from "@/actions/serverActions";
import AddProductForm from "@/components/AddProductForm";
import StudentList from "@/components/StudentList";

export default async function Home() {
  const res = await getStudents();
  if (!res.ok) return "Error";
  const students = await res.json();
  return (
    <main className="flex min-h-screen  flex-col items-center gap-5 px-10 py-2">
      {Array.isArray(students) && students.length === 100 ? (
        <div className="p-3 text-xl bg-stone-300 rounded-sm ">
          Can't add more the limit is full :){" "}
        </div>
      ) : (
        <AddProductForm />
      )}
      <div className="w-full border border-stone-400 " />
      {Array.isArray(students) ? (
        <StudentList students={students} />
      ) : (
        <div></div>
      )}
    </main>
  );
}
