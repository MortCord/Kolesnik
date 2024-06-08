package com.example.sitekolesnik.service.Lessons;

import com.example.sitekolesnik.model.Lessons;

import java.util.List;

public interface LessonsService {
    public Lessons saveLesson(Lessons lessons);

    public List<Lessons> getAllLessons();

    public void deleteById(int id);

    public Lessons updateLesson(int id, Lessons updatedLesson);
}
