//Arrow fuction annotation
const multiply=(a:number,b:number):number=>a*b;


//object annotation
let user:{name:string; age:number}={
    name:"Akasha",
    age:10
};


function sayHello(msg:string):void{
    console.log(msg);

}



//function annotation
function greet(name:string):string{
    return `Hello,${name}!`
}

console.log(greet("Akasha"));
sayHello("This is my new car");

