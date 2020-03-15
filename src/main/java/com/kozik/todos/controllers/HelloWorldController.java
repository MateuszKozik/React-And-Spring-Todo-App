package com.kozik.todos.controllers;

import com.kozik.todos.utilities.Message;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class HelloWorldController {

    @GetMapping("/hello-world")
    public String helloWorld(){
        return "Hello World!";
    }

    @GetMapping("/hello-world-bean")
    public Message helloWorldBean(){
        return new Message("Hello World!");
    }

    @GetMapping("/hello-world/path-variable/{name}")
    public Message helloWorldPathVariable(@PathVariable String name){
       throw new RuntimeException("Something went wrong");
        // return new Message("Hello World,  " + name);
    }
}