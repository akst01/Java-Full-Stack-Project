package com.example.studenttask.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.studenttask.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}