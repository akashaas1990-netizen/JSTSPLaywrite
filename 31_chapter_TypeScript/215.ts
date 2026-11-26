//primitive types
let name:string="John";
let age:number=38;
let pi:number=3.142;
let distance_to_moon: number = 398765434567;
let isactive:boolean=true;
let nothng:null=null;
let notdefined:undefined;

//let pi: float = 3.14;
let numbers:number[]=[1,2,3];
let names:Array<string>=["John","Jane"];
let message:string="Hello Typescript";
let count:number=42;
//Any (Avoid when possible)
let anything:any="hello";
//unknown safer than any
let unknown:unknown="hello";
export{};


console.log(name+" "+age+" "+pi+" +"+distance_to_moon+" "
    +isactive+" "+nothng+" "+notdefined+" "+numbers+" "+names+" "
    +message+" "+count+" "+anything+" "+unknown);



