package org.example.backend.controller;


import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/secure")
public class SecureController {

    @GetMapping("/data")
    public Map<String, String> getSecureData() {
        return Map.of("message", "This is protected data!");
    }
}
