package com.example.studenttask.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.studenttask.entity.Task;
import com.example.studenttask.service.TaskService;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @PostMapping("/student/{studentId}")
    public Task addTask(@PathVariable Long studentId, @RequestBody Task task){
        return service.addTask(studentId, task);
    }

    @GetMapping("/student/{studentId}")
    public List<Task> getTasks(@PathVariable Long studentId){
        return service.getTasksByStudent(studentId);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.deleteTask(id);
    }

    @PutMapping("/{id}")
    public Task update(@PathVariable Long id, @RequestBody Task task) {
        return service.updateTask(id, task);
    }
}