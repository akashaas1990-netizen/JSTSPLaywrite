interface User{
    name:string,
    age:number,
    email:string
}
const user1:User={
name:"Akasha",
age:32,
email:"abc@gmail.com"
}
const user2:User={
name:"Akasha",
//Don't use age in this case
age:54,
email:"abc@gmail.com"
}
console.log(user2,"\n",user1);
//why getting an error?
//Because Interface defines the shape of the objects for example 
//class also defines the shape of the object yes or no
//class is also a blue print
//Interface works with the objects

//I can create unlimited number of objects yes/no 
// but all of them follow the same structure

//What is the purpose real time example???????(Sanjay Rana)

//what was the problem with the class?
//Answer problem with the class there are 100attributes 
// o1 object can have 90 
// o2 Object can have 80 
// o3 Object can have 100

//proper contract hogaya this isa concept of abstraction also 
//Abstraction means not only means hiding the implementation
//it also means following a rules also

//API Automation is used
//In the playwright whenever have a API response we are receiving something
//I want to make sure matches with the interface then only it verifies

//2.In the webelement is also used
//let also used not difference const

//Interface doesn't genertae any JS code
//They exist only at compile time for type checking 
//After completion, interface completely disappear from the output

//I'm going to school mother used to give 5rs when ever 5rs i used to
//basically take a rikshaw take a bus reach to the school or somwhere
//it was arround 2km away you know what i used to do something 
//while i take a bus but not ticket save my 5rs or 2rs whatever
//then i will eat somasa somekind of junkfoods sometimes momos
//sometimes chamin sometimes extra stuff problem is we are not following a rule
//what happened instead of mother but mother got to know this
//now my father was used a trick i think pramod has some eating somosa or something
//previously he came 1/2 hr but not late by 2hrs
//Father started doing one thing he used to go with me till i get a bus
//this is called as the interface
//this is what the TS says this
//Who wants to tell you the rules JS/TS

//Do you think it generate a code? 
// No notatall it's just a signature




