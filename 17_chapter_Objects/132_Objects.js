let a ={
    name:"Akasha",
    age:35
};
//Intersting part is we can fetch the value
let a1={status:"pass"};
console.log(a1.status);//by using .-->Operator
console.log(a1["status"]);//by  using the Square operator
console.log(a);
//Keys are very sensitive in nature
let a22={status:"pass",Status:"fail"};
console.log(a22["status"]);
console.log(a22["Status"]);

