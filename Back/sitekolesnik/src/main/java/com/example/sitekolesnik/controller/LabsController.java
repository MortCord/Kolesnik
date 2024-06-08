package com.example.sitekolesnik.controller;

import com.example.sitekolesnik.model.Labs;
import com.example.sitekolesnik.service.Labs.LabsService;
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
@RequestMapping("/lab")
public class LabsController {
    @Autowired
    private LabsService labsService;

    @Value("${upload.dir}")
    private String uploadDir;

    @PostMapping("/add")
    public String add(@RequestBody Labs labs) {
        labsService.saveLab(labs);
        return "Lab has been added";
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

            // Create and save the lab
            Labs lab = new Labs();
            lab.setName(name);
            lab.setPlot(plot);
            lab.setFileName(file.getOriginalFilename());
            labsService.saveLab(lab);

            return "Lab added with file: " + file.getOriginalFilename();
        } catch (IOException e) {
            e.printStackTrace();
            return "Failed to upload file.";
        }
    }

    @GetMapping("/getAll")
    public List<Labs> getAll() {
        return labsService.getAllLabs();
    }

    @DeleteMapping("delete/{id}")
    public void deleteById(@PathVariable int id) {
        labsService.deleteById(id);
    }

    @PutMapping("update/{id}")
    public Labs updateLabs(@PathVariable int id, @RequestBody Labs labs) {
        return labsService.updateLab(id, labs);
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
