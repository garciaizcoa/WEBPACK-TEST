export default class User {
    constructor (firstName, lastName, id){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    toString(){
        return `${this.id}: ${this.firstName} ${this.lastName}`
    }
}
export const generateId = () =>
    Math.floor(Math.random() * 100000).toString();

