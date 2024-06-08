package com.example.sitekolesnik.service.Labs;

import com.example.sitekolesnik.model.Labs;

import java.util.List;

public interface LabsService {
    public Labs saveLab(Labs labs);

    public List<Labs> getAllLabs();

    public void deleteById(int id);

    public Labs updateLab(int id, Labs updatedLab);
}
