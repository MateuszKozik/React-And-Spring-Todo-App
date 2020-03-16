package com.kozik.todos.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.kozik.todos.entities.Todo;

import org.springframework.stereotype.Service;

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList <Todo>();
    private static Long idCounter = 0L;

    static {
        todos.add(new Todo(++idCounter, "First task", "Larn to Dance", new Date(), false));
        todos.add(new Todo(++idCounter, "Second task", "Larn about React", new Date(), false));
        todos.add(new Todo(++idCounter, "Third task", "Larn about AJAX", new Date(), false));
    }

    public List<Todo> findAll(){
        return todos;
    }

    public Todo deleteById(Long id){
        Todo todo = findById(id);
        if(todo == null) return null;
        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public Todo findById(long id){
        for(Todo todo:todos){
            if(todo.getId() == id){
                return todo;
            }
        }
        return null;
    }

    public Todo save(Todo todo){
        if(todo.getId()==-1){
            todo.setId(++idCounter);
            todos.add(todo);
        }else{
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }
}