import axios from 'axios'

class TodoDataService {

    retieveAllTodos(name){
        return axios.get(`http://localhost:8081/users/${mateusz}/todos`)
    }
}

export default TodoDataService()