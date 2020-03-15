import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'

class ListTodosComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            todos : [ ],
            message : null
        }
        this.deteteTodoClicked = this.deteteTodoClicked.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retieveAllTodos(username)
            .then( response => {
                this.setState({todos : response.data})
            } )
    }

    deteteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.deleteTodo(username, id)
            .then( response => {
                this.setState({message : `Delete of todo ${id}`})
            })
    }

    render(){
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is completed?</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.isDone.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={() => this.deteteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent