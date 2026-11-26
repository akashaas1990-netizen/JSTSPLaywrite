interface Point
{
  readonly  X:number;
  readonly Y:number;
}
const points: Point = {
X:10,
Y:10,
}
console.log(points);
points.X=15;
console.log(points);


//This is helpfull in the playWrite suppose we can create an interface of locators
//Having some locators "\\a[a=5]"
//Do you want t0 change? 
// //NO thats why use read only in this case
