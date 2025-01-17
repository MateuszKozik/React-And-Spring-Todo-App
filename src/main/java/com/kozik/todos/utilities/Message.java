package com.kozik.todos.utilities;

public class Message {

    private String message;

	public Message(String message) {
        this.message = message;
	}

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "{" +
            " message='" + getMessage() + "'" +
            "}";
    }

}
