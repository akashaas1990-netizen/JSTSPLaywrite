//ReadONly
//Now something called as readonly
//What do you mean by readonly?
//Readonly means we can't the change the value again 
//once it assigned to the variable
interface point{
    X:number;
    Y:number;
}
const point: point={
    X:10,
    Y:10
}

console.log(point);
//point.X=15;
//problem here is if you applay readonly can't change the value here
//once it is assigned to the object

//during the object value created again the value can't be changed that value 
console.log(point);
//const point is the object reference, reference is the const
//these values are not cosntant X and Y values
//I want to do X and Y should not change should use readOnly

