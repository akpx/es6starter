export class MyForm {

    constructor(name = "", age = 0){ // assigning defaults in the parameter
        this.name = name
        this.age = age
    }

    get info(){
        return this.getInfo()
    }

    getInfo(){
        return {
            name: this.name,
            age: this.age
        }
    }

}