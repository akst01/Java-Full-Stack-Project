import { useState } from "react";
import axios from "axios";

function AddTask() {

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: ""
  });

  const [studentId, setStudentId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      `http://localhost:8080/tasks/student/${studentId}`,
      task
    );
    alert("Task Added Successfully");
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>

        <input placeholder="Student ID"
          onChange={(e)=>setStudentId(e.target.value)} />

        <input placeholder="Title"
          onChange={(e)=>setTask({...task,title:e.target.value})} />

        <input placeholder="Description"
          onChange={(e)=>setTask({...task,description:e.target.value})} />

        <input placeholder="Status"
          onChange={(e)=>setTask({...task,status:e.target.value})} />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;