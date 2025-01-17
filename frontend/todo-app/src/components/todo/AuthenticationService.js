import axios from 'axios'

class AuthenticationService{

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    executeBasicAuthenticationService(username, password){
        return axios.get('http://localhost:8081/basicauth',
            {
                headers: {authorization: this.createBasicAuthToken(username, password)}
            }
        )
    }

    registerSuccessfulLogin(username,password){

        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxioxInterceptors(this.createBasicAuthToken(username, password))
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
            return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user
    }

    setupAxioxInterceptors(basicAuthHeader){
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()