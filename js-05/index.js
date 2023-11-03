//window.console.log("hi");
//window.alert("hi")
//console.log(this)
//console.log(window)




//this drone hare object be homone object ashrae mikone
//console.log(this)

//const user = {
//   name: "ali",
//    favorites:{
//        a: "1",
//        ab: function(){
//            console.log(this)
//        }
//    },
//    sayMyname : function (){
//       this.favorites.ab()
//    }
//}
//user.sayMyname()


//fuction declare
//function x(){
//  console.log("a")
//}

//function expration 
//const y = function (){
//   console.log("b")
//}
//x()
//y()

//let sum = function (a){
//   return a*1000
//}
//console.log(sum(6))


//arrowefunction
//const sum = (a) => {
//   return a*1000
//}
//console.log(sum(7))

//let sum =  a => a * 1000
//console.log(sum(4))


//globale 

//const x = "a"

//const fn  = () => {
//     console.log(x)
//     const y = "c"
//}

//fn()


//arrayfunction
//const contactList = [
//  {
//    name : "rahil",
//    age : 20,
//  },
//  {
//    name : "sadaf",
//    age : 27
// }
//]

//console.log(contactList)
//array ba maghdare push mishe apdate karde
//const addNewContact = ( name ,  phoneNumber) =>{
//    if(!name && !phoneNumber) return null;
//   const NewContact = {
//        name: name ,
//        phoneNumber: phoneNumber,
//    }
//    contactList.push(NewContact)
//}
//addNewContact("rahil","09033782740")
//console.log(contactList)


//array function matode car brandeshe

const CarList = [{
     name : "pride",
     brande: "sipa",

   },
   {
      name : "rana",
      brande: "iranekhodro"
   },
]

console.log(CarList);

const carOPtion = ( name , brande) => {
    const Car1 = {
        id: self.Crypto.randomUUID,
        timestamp: Date.now,
        name ,
        brande ,
    }
    CarList.push(Car1)
}
carOPtion("l90","iranekhodroe");
console.log(CarList);


const user = {
   name: "ali",
}
user.name = "reza";
console.log(user.name)


console.log(Math.random());

const date = new Date
console.log(date.getDate())


const x =  "ali";

const persian = {
    x
}
console.log(x)

for(i = 0 ; i <= 10 ; i = i + 1){
    console.log(i)
}