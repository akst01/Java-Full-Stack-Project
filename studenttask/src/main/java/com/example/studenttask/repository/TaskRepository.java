package com.example.studenttask.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.example.studenttask.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByStudentId(Long studentId);
}