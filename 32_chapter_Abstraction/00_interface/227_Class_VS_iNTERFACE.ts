interface Excetable{
    name:string;
    run():void,
    getstatus():string;
}
class Testcase implements Excetable
{
    name:string;
    constructor(name:string)
    {
        this.name=name;
    }
    run():void{
        console.log("[Run]"+this.name);
    }
    getstatus(): string {
        return "PASS"
    }
}

