let grid=[
    [10,20,30],
    [40,50,60],
    [70,80,90]
]
console.log(grid[0][0]);
//console.log(grid[7][7]);

//can we change value ofcouse arrays are mutable
grid[0][0]=25
console.log(grid[0][0]);

//what is the length of the grid
console.log(grid.length);//row--->3
//get column length
console.log(grid[0].length);//column--->3
