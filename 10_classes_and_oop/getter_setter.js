class User {
    constructor(email,password) {
        this.email= email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}annu`
    }
    set password(value){
        this._password = value
    }
}
const anu = new User("annu@gmail.com","abc")
console.log(anu.email);
