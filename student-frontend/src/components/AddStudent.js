import { useState } from "react";
import axios from "axios";

function AddStudent() {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students", student);
    alert("Student Added Successfully");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name"
          onChange={(e)=>setStudent({...student,name:e.target.value})} />

        <input placeholder="Email"
          onChange={(e)=>setStudent({...student,email:e.target.value})} />

        <input placeholder="Course"
          onChange={(e)=>setStudent({...student,course:e.target.value})} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddStudent;