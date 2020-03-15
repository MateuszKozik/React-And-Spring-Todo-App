import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
       return axios.get('http://localhost:8081/hello-world')
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8081/hello-world-bean')
     }
}

export default new HelloWorldService()