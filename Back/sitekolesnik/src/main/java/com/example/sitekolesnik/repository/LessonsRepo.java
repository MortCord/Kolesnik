package com.example.sitekolesnik.repository;

import com.example.sitekolesnik.model.Lessons;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LessonsRepo extends JpaRepository<Lessons, Integer> {

}
