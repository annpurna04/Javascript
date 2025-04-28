const User = {
    _email:'anime.com',
    _password:'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const anu = Object.create(User)
console.log(anu.email);
