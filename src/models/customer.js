/* eslint-disable */
export default class Customer {
    constructor(firstname, lastname, phonenumber, token){
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.token = token;
    }

    // SETTERS
    setFirstName(firstname) {
        this.firstname = firstname;
    }

    setLastName(lastname) {
        this.lastname = lastname;
    }

    // GETTERS
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