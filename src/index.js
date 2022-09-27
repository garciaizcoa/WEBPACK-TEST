import xyz from "./modules/message";
import MyUser, { generateId } from "./modules/user";

const user = new MyUser('John', 'Smith', generateId());

document.getElementById('users').innerHTML = user.toString();

document.getElementById('message').innerHTML = xyz;

