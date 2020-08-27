// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    getName() {
        console.log(`my name is ${this.name}`);
        return this.name;
    }

    getId() {
        console.log(`my id number is ${this.id}`);
        return this.id;
    }

    getEmail() {
        console.log(`my email is ${this.email}`);
        return this.email;
    }

    getRole() {
        console.log('this employee works as a Employee');
        return 'Employee';
    }
}

module.exports = Employee;