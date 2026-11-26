//Interfaceused in API testing
interface APIResponse{
    statusCode:Number;
    body?:string;
    headers?:object;
    responseTime:number;

}
//From a Api background
//Get-->Body optional//in the get body is optional 
//post-->Important
// and header can also optiona;
//Something is optional use question mark
const responseDataGet:APIResponse={
    statusCode:200,
    responseTime:200
}

const responseDataPost:APIResponse={
    statusCode:200,
    body:"{'name':'Pramod'}",
    responseTime:200,
    headers:{}
}

console.log(responseDataGet);
console.log(responseDataPost);