import axios from 'axios'

class AuthenticationService{

    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxioxInterceptors()
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

    setupAxioxInterceptors(){
        let username = 'user'
        let password = 'password'

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

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