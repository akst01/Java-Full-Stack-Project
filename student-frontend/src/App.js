import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AddStudent from "./components/AddStudent";
import ViewStudents from "./components/ViewStudents";
import AddTask from "./components/AddTask";
import ViewTasks from "./components/ViewTasks";

function App() {
  return (
    <Router>
      <div style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        borderRadius: "10px"
      }}>
        <h1>Student Task Management</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/students">Students</Link> |{" "}
          <Link to="/tasks">Tasks</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/students" element={<>
              <AddStudent />
              <ViewStudents />
            </>} />
          <Route path="/tasks" element={<>
              <AddTask />
              <ViewTasks />
            </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;