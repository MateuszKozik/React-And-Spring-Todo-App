import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'
import moment from 'moment'

class ListTodosComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            todos : [ ],
            message : null
        }
        this.deteteTodoClicked = this.deteteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    componentDidMount() {
        this.refreshTodos()
    }

    refreshTodos() {
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
                this.setState({message : `Delete of todo ${id} Successful`})
                this.refreshTodos()
            })
    }

    updateTodoClicked(id) {
        this.props.history.push(`/todos/${id}`)
    }

    addTodoClicked(id) {
        this.props.history.push('/todos/-1')
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.isDone}</td>
                                    <td>{moment(todo.targetDate).format('DD-MM-YYYY')}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => this.updateTodoClicked(todo.id)}>Update</button>
                                        <button className="btn btn-danger ml-2" onClick={() => this.deteteTodoClicked(todo.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent