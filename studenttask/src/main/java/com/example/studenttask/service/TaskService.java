package com.example.studenttask.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import com.example.studenttask.entity.Task;
import com.example.studenttask.entity.Student;
import com.example.studenttask.repository.TaskRepository;
import com.example.studenttask.repository.StudentRepository;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final StudentRepository studentRepository;

    public Task addTask(Long studentId, Task task){
        Student student = studentRepository.findById(studentId).orElseThrow();
        task.setStudent(student);
        return taskRepository.save(task);
    }

    public List<Task> getTasksByStudent(Long studentId){
        return taskRepository.findByStudentId(studentId);
    }

    public void deleteTask(Long id){
        taskRepository.deleteById(id);
    }

    public Task updateTask(Long id, Task updatedTask) {
        Task existing = taskRepository.findById(id).orElseThrow();
        existing.setTitle(updatedTask.getTitle());
        existing.setDescription(updatedTask.getDescription());
        existing.setStatus(updatedTask.getStatus());
        return taskRepository.save(existing);
    }
}