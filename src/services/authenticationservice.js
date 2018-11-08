import axios from 'axios';
import qs from 'qs' ;
import user from '@/models/user';

export default {
    data(){
        return{
            user
        }
    },
    methods: { 
        login(username, password) {
            if(username != "" && password != "") {
              const data = qs.stringify({ 
                grant_type: 'password',            
                user: this.input.username, 
                password: this.input.password
              });
    
              const endpoint = "mayfieldgolf.azurewebsites.net/token";
    
              const headers = {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
              };
    
              axios.post(endpoint, data, headers).then(function(response){
                localStorage.setItem("access_token", response.access_token);
                this.user = new user(response.username, response.email, response.firstname, response.lastname);
                return true;
              }).catch(function(error){
                return error;
              });
            }
        }
    }
}