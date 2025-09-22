package org.example.backend.controller;


import org.example.backend.model.UserDTO;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final Map<String, String> users = new HashMap<>(); // in-memory users

    public AuthController() {
        // default user for testing
        users.put("user", "pass");
    }

    @PostMapping("/register")
    public Map<String, String> register(@RequestBody UserDTO user) {
        if (users.containsKey(user.getUsername())) {
            return Map.of("error", "User already exists");
        }
        users.put(user.getUsername(), user.getPassword());
        return Map.of("message", "User registered successfully!");
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody UserDTO user) {
        if (users.containsKey(user.getUsername())
                && users.get(user.getUsername()).equals(user.getPassword())) {
            return Map.of("token", "fake-jwt-token-" + user.getUsername());
        }
        return Map.of("error", "Invalid credentials");
    }
}
