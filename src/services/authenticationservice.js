import axios from 'axios';

export default {
  validatePasswords(password, confpassword){
    if( password === confpassword ) {
      return true;
    } else {
      return false;
    }
  },
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  validateSignUp(email, password, confpassword, firstname, lastname, phonenumber){
    let emptyFields = [];
    
    if( email == "" ) { emptyFields.push("Email is required."); }
    if( password == "" ) { emptyFields.push("Password is required."); }
    if( confpassword == "" ) { emptyFields.push("Password is required."); }
    if( firstname == "" ) { emptyFields.push("First Name is required."); }
    if( lastname == "" ) { emptyFields.push("Last Name is required."); }
    if( phonenumber == "" ) { emptyFields.push("Phonenumber is required."); }

    return emptyFields;

  },
  signUpUserOnBackend(customerDetails){
    return axios.post('https://mayfieldgolfapi.azurewebsites.net/api/CustAccount', {
      customer: JSON.stringify(customerDetails)
    });
  }
}
