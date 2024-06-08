package com.example.sitekolesnik.service.Labs;

import com.example.sitekolesnik.model.Labs;
import com.example.sitekolesnik.model.Lessons;
import com.example.sitekolesnik.repository.LabsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LabsServiceImpl implements LabsService {
    @Autowired
    LabsRepo labsRepo;


    @Override
    public Labs saveLab(Labs labs) {
        return labsRepo.save(labs);
    }

    @Override
    public List<Labs> getAllLabs() {
        return labsRepo.findAll();
    }

    @Override
    public void deleteById(int id) {
        labsRepo.deleteById(id);
    }

    @Override
    public Labs updateLab(int id, Labs updatedLab) {
        if(updatedLab == null){
            throw new IllegalArgumentException("Updated lab can't be null");
        }

        Optional<Labs> optionalLabs = labsRepo.findById(id);
        if(optionalLabs.isPresent()){
            Labs labs = optionalLabs.get();
            labs.setName(updatedLab.getName());
            labs.setPlot(updatedLab.getPlot());
            labs.setFileName(updatedLab.getFileName());
            return labsRepo.save(labs);
        }
        return updatedLab;
    }
}
