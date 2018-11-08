/* eslint-disable */
export default class User {
    constructor(username, email, password, firstname, lastname){
        this.username = username;
        this.email =  email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // SETTERS
    setEmail(email) {
        this.email = email;
    }

    setFirstName(firstname) {
        this.firstname = firstname;
    }

    setLastName(lastname) {
        this.lastname = lastname;
    }

    // GETTERS
    getEmail() {
        return this.email;
    }

    getFirstName() {
        return this.firstname;
    }

    getLastName() {
        return this.lastname;
    }

    getFullName() {
        return this.firstname + " " + this.lastname;
    }
}