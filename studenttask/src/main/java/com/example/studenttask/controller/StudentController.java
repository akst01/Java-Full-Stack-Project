package com.example.studenttask.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.studenttask.entity.Student;
import com.example.studenttask.service.StudentService;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    private final StudentService service;

    @PostMapping
    public Student create(@RequestBody Student student){
        return service.save(student);
    }

    @GetMapping
    public List<Student> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Student get(@PathVariable Long id){
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Student update(@PathVariable Long id, @RequestBody Student student) {
        return service.update(id, student);
    }
}