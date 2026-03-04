import { useEffect, useState } from "react";
import axios from "axios";

function ViewStudents() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/students")
      .then(res => setStudents(res.data));
  }, []);

  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewStudents;