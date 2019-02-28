// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(qualities){
        super(qualities);
        this.specialty = qualities.specialty
        this.favLanguage = qualities.favLanguage
        this.catchPhrase = qualities.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(student) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
}



class Student extends Person{
    constructor(about){
        super(about);
        this.previousBackground = about.previousBackground
        this.className = about.className
        this.favSubjects = about.favSubjects
    }
    listsSubjects() {
        console.log(this.favSubjects)
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}



class ProjectManagers extends Instructor{
    constructor(info){
        super(about);
        this.previousBackground = about.previousBackground
        this.className = about.className
        this.favSubjects = about.favSubjects
    }
    listsSubjects() {
        console.log(this.favSubjects)
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}











































