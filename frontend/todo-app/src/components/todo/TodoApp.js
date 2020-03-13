import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class TodoApp extends Component{

    render(){
        return(
            <div className="TodoApp">
                <Router>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todos" component={ListTodosComponent} />
                            <Route path="" component={ErrorComponent} />
                        </Switch>
                </Router>
            </div>
        )
    }
}

class ListTodosComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            todos :
            [
                {id: 1, descrition: 'First task'},
                {id: 2, descrition: 'Second task'},
                {id: 3, descrition: 'Third task'},
            ]
        }
    }

    render(){
        return (
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map (
                            todo =>
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.descrition}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

class WelcomeComponent extends Component {

    render(){
        return (
            <div>
                Welcome {this.props.match.params.name}
            </div>
        )
    }
}

function ErrorComponent(){
    return <div>An Error Occured.</div>
}

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        this.setState(
            {
                [event.target.name]
                    :event.target.value
            }
        )
    }

    loginClicked(){
        if(this.state.username === 'test' && this.state.password === 'test'){
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }

    render(){
        return(
            <div>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login success</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

export default TodoApp;