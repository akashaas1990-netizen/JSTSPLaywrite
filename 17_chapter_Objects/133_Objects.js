let a={status:"pass"};
let b=a;//copy the reference
b.status="fail";
console.log(a.status);
//if you use a real copy need you use spread concept
let c={...a};//real copy
c.status="pending";
console.log(a.status);
console.log(c.status);