let scores=[
[85,25,35],
[60,70,80],
[98,99,100]
]
let rowsSum=scores.map(row=>row.reduce((a,b)=>a+b));
console.log(scores+"\n "+rowsSum);