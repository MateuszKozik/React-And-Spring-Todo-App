import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

class TodoApp extends Component{

    render(){
        return(
            <div className="TodoApp">
                <Router>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todos" component={ListTodosComponent} />
                            <Route path="" component={ErrorComponent} />
                        </Switch>
                        <FooterComponent/>
                </Router>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">Todos</div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/test">Home</Link></li>
                        <li><Link className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <hr/> Footer
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
                {id: 1, description: 'First task', done: false, targetDate: new Date()},
                {id: 2, description: 'Second task', done: false, targetDate: new Date()},
                {id: 3, description: 'Third task', done: false, targetDate: new Date()},
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
                            <th>Is completed?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map (
                            todo =>
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
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
                Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos"> here</Link>
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