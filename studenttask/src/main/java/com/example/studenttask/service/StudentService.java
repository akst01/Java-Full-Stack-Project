package com.example.studenttask.service;

import org.springframework.stereotype.Service;
import java.util.List;
import com.example.studenttask.entity.Student;
import com.example.studenttask.repository.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public Student save(Student student){
        return repository.save(student);
    }

    public List<Student> getAll(){
        return repository.findAll();
    }

    public Student getById(Long id){
        return repository.findById(id).orElseThrow();
    }

    public void delete(Long id){
        repository.deleteById(id);
    }


    public Student update(Long id, Student updatedStudent) {
        Student existing = repository.findById(id).orElseThrow();
        existing.setName(updatedStudent.getName());
        existing.setEmail(updatedStudent.getEmail());
        existing.setCourse(updatedStudent.getCourse());
        return repository.save(existing);
    }
}