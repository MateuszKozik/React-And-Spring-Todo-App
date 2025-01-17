package com.kozik.todos.controllers;

import com.kozik.todos.utilities.Message;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BasicAuthenticationController {

    @GetMapping("/basicauth")
    public Message basicAuthrntication() {
        return new Message("You are authenticated");
    }
}