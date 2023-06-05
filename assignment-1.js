const myHeros = ["thor", "spiderman", "ironman"]
const dcHeros = ["batman", "black adam", "superman"]


const heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

heroPower.getSpiderPower()
heroPower.hitesh()

// dcHeros.hitesh()

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh is available in array`);
}



const User = {
    name: "top name",
    email: "whatever@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: true
}

const TSAssistant = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`);
}

let myName = "hitesh.    "
console.log(myName.length);
myName.truelength()
