package com.example.sitekolesnik.repository;


import com.example.sitekolesnik.model.Labs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LabsRepo extends JpaRepository<Labs,Integer> {
}
