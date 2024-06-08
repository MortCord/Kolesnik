package com.example.sitekolesnik.service.Lessons;

import com.example.sitekolesnik.model.Lessons;
import com.example.sitekolesnik.repository.LessonsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LessonsServiceImpl implements LessonsService {

    @Autowired
    LessonsRepo lessonsRepo;

    @Override
    public Lessons saveLesson(Lessons lessons) {
        return lessonsRepo.save(lessons);
    }

    @Override
    public List<Lessons> getAllLessons() {
        return lessonsRepo.findAll();
    }

    @Override
    public void deleteById(int id) {
        lessonsRepo.deleteById(id);
    }

    @Override
    public Lessons updateLesson(int id, Lessons updatedLesson) {
        if(updatedLesson == null){
            throw new IllegalArgumentException("Updated lesson can't be null");
        }

        Optional<Lessons> optionalLessons = lessonsRepo.findById(id);
        if(optionalLessons.isPresent()){
            Lessons lessons = optionalLessons.get();
            lessons.setName(updatedLesson.getName());
            lessons.setPlot(updatedLesson.getPlot());
            lessons.setFileName(updatedLesson.getFileName());
            return lessonsRepo.save(lessons);
        }
        return updatedLesson;
    }
}
