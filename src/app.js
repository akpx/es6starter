import {MyForm} from './MyComponent'

const myForm = new MyForm("john", 20)

console.log("User Info", myForm.getInfo())

document.getElementById('name').innerText = myForm.name
document.getElementById('age').innerText = myForm.age
