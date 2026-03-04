import { useState } from "react";
import axios from "axios";

function ViewTasks() {

  const [studentId, setStudentId] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(
      `http://localhost:8080/tasks/student/${studentId}`
    );
    setTasks(res.data);
  };

  return (
    <div>
      <h2>View Tasks</h2>

      <input placeholder="Enter Student ID"
        onChange={(e)=>setStudentId(e.target.value)} />

      <button onClick={fetchTasks}>Get Tasks</button>

      <ul>
        {tasks.map(task => (
            <li key={task.id} style={{ marginBottom: "10px" }}>
            <strong>Title:</strong> {task.title} <br />
            <strong>Description:</strong> {task.description} <br />
            <strong>Status:</strong> {task.status}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewTasks;