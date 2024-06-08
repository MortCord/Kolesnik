package com.example.sitekolesnik.controller;

import com.example.sitekolesnik.model.Lessons;
import com.example.sitekolesnik.service.Lessons.LessonsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/lek")
public class LessonsController {
    @Autowired
    private LessonsService lessonsService;

    @Value("${upload.dir}")
    private String uploadDir;

    @PostMapping("/add")
    public String add(@RequestBody Lessons lessons) {
        lessonsService.saveLesson(lessons);
        return "Lesson added";
    }

    @PostMapping("/addWithFile")
    public String addWithFile(@RequestParam("name") String name,
                              @RequestParam("plot") String plot,
                              @RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return "Please select a file to upload.";
        }

        try {
            // Ensure the upload directory exists
            File uploadDirFile = new File(uploadDir);
            if (!uploadDirFile.exists()) {
                uploadDirFile.mkdirs();
            }

            // Save the file to the specified directory
            String filePath = uploadDir + File.separator + file.getOriginalFilename();
            file.transferTo(new File(filePath));

            // Create and save the lesson
            Lessons lesson = new Lessons();
            lesson.setName(name);
            lesson.setPlot(plot);
            lesson.setFileName(file.getOriginalFilename());
            lessonsService.saveLesson(lesson);

            return "Lesson added with file: " + file.getOriginalFilename();
        } catch (IOException e) {
            e.printStackTrace();
            return "Failed to upload file.";
        }
    }

    @GetMapping("/getAll")
    public List<Lessons> getAll() {
        return lessonsService.getAllLessons();
    }

    @DeleteMapping("delete/{id}")
    public void deleteById(@PathVariable int id) {
        lessonsService.deleteById(id);
    }

    @PutMapping("update/{id}")
    public Lessons updateLesson(@PathVariable int id, @RequestBody Lessons lessons) {
        return lessonsService.updateLesson(id, lessons);
    }

    @GetMapping("/images/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
        try {
            Path file = Paths.get(uploadDir).resolve(filename);
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
            return ResponseEntity.notFound().build();
        }
    }
}
