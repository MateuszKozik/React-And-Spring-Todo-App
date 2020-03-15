package com.kozik.todos.controllers;

import java.util.List;

import com.kozik.todos.entities.Todo;
import com.kozik.todos.services.TodoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/users/{user_name}/todos")
    public List<Todo> getAllTodos(String username){
        return todoService.findAll();
    }
}