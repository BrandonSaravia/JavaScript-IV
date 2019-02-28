// CODE here for your Lambda Classes




///////////////////////////////////////////////////////////////////////// Classes



// Base-Class Person

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



// Child-Class Instructor

class Instructor extends Person{
    constructor(qualities){
        super(qualities);
        this.specialty = qualities.specialty;
        this.favLanguage = qualities.favLanguage;
        this.catchPhrase = qualities.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}



// Child-Class Student

class Student extends Person{
    constructor(about){
        super(about);
        this.previousBackground = about.previousBackground;
        this.className = about.className;
        this.favSubjects = about.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}



// Grandchild-Class PMs

class ProjectManagers extends Instructor{
    constructor(info){
        super(info);
        this.gradClassName = info.gradClassName;
        this.favInstructor = info.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`
    }
    debugsCode(studentObject, subject) {
        return `${this.name} debugs ${studentObject.name}'s code on ${subject}`
    }
}





///////////////////////////////////////////////////////////////////////////// User Entries



// Instructors


const josh = new Instructor({
    name: 'Josh Knell',
    location: 'California',
    age: 29,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies?`,
  });



  const eminem = new Instructor({
    name: 'Marshall Bruce Mathers III',
    location: 'California',
    age: 47,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Everyone is from the 313.`,
  });



  const timmy = new Instructor({
    name: 'Timmy Turner',
    location: 'Dimsdale',
    age: 11,
    gender: 'male',
    favLanguage: 'Ruby',
    specialty: 'Back-end',
    catchPhrase: `What could possibly go wrong!`,
  });




// Students


const brandon = new Student({
    name: 'Brandon Saravia',
    location: 'South Carolina',
    age: 20,
    gender: 'male',
    previousBackground: 'Welder',
    className: 'Web 18',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
  });




  const george = new Student({
    name: 'George Washington',
    location: 'Virginia',
    age: 287,
    gender: 'male',
    previousBackground: 'U.S. President',
    className: 'Web 18',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
  });




  const luke = new Student({
    name: 'Luke Skywalker',
    location: 'A Gallaxy Far Far Away',
    age: 19,
    gender: 'male',
    previousBackground: 'Robot Mechanic',
    className: 'Web 18',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
  });





// Project Managers


const dennis = new ProjectManagers({
    name: 'Dennis Orbson',
    location: 'Nomad',
    age: 25,
    gender: 'male',
    gradClassName: 'Web 13',
    favInstructor: 'Marshall Bruce Mathers III',
    specialty: 'redux',
    favLanguage: 'python',
    catchPhrase: 'thats cool',
});




const matt = new ProjectManagers({
    name: 'Matt Damon',
    location: 'Hollywood',
    age: 46,
    gender: 'male',
    gradClassName: 'Web 1000',
    favInstructor: 'Josh Knell',
    specialty: 'redux',
    favLanguage: 'C#',
    catchPhrase: 'Im Matt freaking Damon!',
});




const vader = new ProjectManagers({
    name: 'Darth Vader',
    location: 'A Gallaxy Far Far Away',
    age: 40,
    gender: 'male',
    gradClassName: 'Web 3',
    favInstructor: 'Timmy Turner',
    specialty: 'redux',
    favLanguage: 'python',
    catchPhrase: 'Phew Chhhh',
});




////////////////////////////////////////////////////////////////////////////// Console Logs


// Instructor
console.log(josh);
console.log(josh.speak());
console.log(josh.demo('Javascript'));
console.log(josh.grade(brandon,'lambda-classes.js'));



// Student
console.log(brandon);
console.log(brandon.speak());
console.log(brandon.listsSubjects());
console.log(brandon.PRAssignment('Javascript IV'));
console.log(brandon.sprintChallenge('Feb 29, 2019'));



// PMs
console.log(dennis);
console.log(dennis.speak());
console.log(dennis.demo('Javascript'));
console.log(dennis.grade(brandon,'lambda-classes.js'));
console.log(dennis.standUp('web18_dennis'));
console.log(dennis.debugsCode(brandon,'lambda-classes.js'));
















