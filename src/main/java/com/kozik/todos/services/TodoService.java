package com.kozik.todos.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.kozik.todos.entities.Todo;

import org.springframework.stereotype.Service;

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList();
    private static Long idCounter = 0L;

    static {
        todos.add(new Todo(++idCounter, "First task", "Larn to Dance", new Date(), false));
        todos.add(new Todo(++idCounter, "Second task", "Larn about React", new Date(), false));
        todos.add(new Todo(++idCounter, "Third task", "Larn about AJAX", new Date(), false));
    }

    public List<Todo> findAll(){
        return todos;
    }
}