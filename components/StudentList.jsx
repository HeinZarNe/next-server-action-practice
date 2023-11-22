import { getStudents } from "@/actions/serverActions";
import React from "react";

const StudentList = ({ students }) => {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      {students?.reverse().map((student) => (
        <article
          key={student.id}
          className="bg-stone-100 text-stone-900 px-4 py-3 rounded-md "
        >
          <p className="text-lg">Name: {student.name}</p>
          <p>Phone: {student.phoneNumber}</p>
        </article>
      ))}
    </div>
  );
};

export default StudentList;
