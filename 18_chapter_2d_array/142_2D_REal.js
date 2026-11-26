let testmatrix=[["LOgin","Pass",200],
["Checkout","Pass",300],
["search","pass",100]


]

//console.log(testmatrix)

for(let i=0;i<testmatrix.length;i++)
{
    for(j=0;j<testmatrix[i].length;j++)
    {
        process.stdout.write(testmatrix[i][j]+"  ");

        //console.log(testmatrix[i][j].length);

        
    }
    
    console.log("");
}