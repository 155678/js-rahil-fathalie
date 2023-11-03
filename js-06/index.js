//tamrine fuction banviside ke maghdare yake arrye ra ba yake object shamle  yake added randome va yake tarikhe randome va yake kalme  pore konde
//const arr = [];

//const generateObject = () =>{
//    const randamNumber = Math.floor(Math.random() * 1000);
//    const char = ["a","b", "c","d"]
//   const randomWorld = char[Math.floor(Math.random() * 3)]+ char [Math.floor(Math.random() * 3)] + char[Math.floor(Math.random() * 3)] + char[Math.floor(Math.random() * 3)]
 // const date = new Date (1698580826309 + Math.floor(Math.random() * 1000))
//    const date =  20 +  Math.floor(Math.random() * 1000)
//    console.log({char , randomWorld , date})
//}

//for 
//map yanie kopie kadne
//map be azie hare kodame item dakhale arye mide function ajra mikhone 
//const num =[ 100 , 200 , 300 , 400 , 500 , 600];

//const numT0100 = num.map ((item)  => item * 100);
//console.log(numT0100)

//const numTimesTO1000 = [];

//for ( i = 0 ; i < num.length ; i++){
//   console.log(num[i] * 1000)
//}
    
//console.log(numTimesTO1000)

//forEach masle map takrar be ma nmide

//const num = [ 100 , 200 , 300 , 400 , 500 , 600];

//num.forEach = ((item , index) => {
//  num[index] = item * 100
//});

//console.log(num)

//const arr = [10 , 20 , 30 , 40 , 50 ,60]
//for of braye item
//for (const item of arr) {
//    console.log(item)
//}

//const obj = {
//    name : "ali",
//    age: 20,
//}
//forin braye index klide 
//for (const index in obj) {
//   console.log(index)
//   console.log(index[obj])
//}

//Documentobjectmodel
//Dom harshize dakhale html object
//const bodyBetterkon =  () => {
//    document.body.innerHTML = "<h1>body tarkid</h1>"
//}

const persian = [
    {
        name: "ali",
        age: 20,
   
    },
    {
       name: "mohammad",
       age: 35,
    },
]

persian.forEach(( item ,  index)=>{ 
    document.body.innerHTML = document.body.innerHTML +=
    `
    <li class ="List-item">
       ${index + 1}-<span style="color:tomato">${item.name}</span> <span style="color:green">${item.age}</span>
    </li>   
    `
})
//const str = `persian ${persian[0].name}`

//document.body.innerText = str

//let x = 10
//x += 10
//console.log(x)

//const name = "ali";
//const welcome = "salam" + name
//const welcome2 = `salam ${name}`

//do while

//const i = 0;
//while (i < 6 ){
//   console.log("bashe");
 //  i++
//}
let i = 0;
do{
    i++
    console.log("bashe")
}
while( i < 6 )