class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email) {
        super(username);     
        this.email = email;
    }

    addCourse() {
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "hello");

chai.logMe();
chai.addCourse();