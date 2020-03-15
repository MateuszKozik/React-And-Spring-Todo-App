import axios from 'axios'

class TodoDataService {

    retieveAllTodos(name){
        return axios.get(`http://localhost:8081/users/${name}/todos`)
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:8081/users/${name}/todos/${id}`)
    }
}

export default new TodoDataService()