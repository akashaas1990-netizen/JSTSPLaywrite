//Maxin concept help you to perform Multiple inheritence
//Maxin 1:Adds LOgging ability
let LoggerMaxin=function(Base){
    return class extends Base{
        log(msg)
        {
            console.log("[LOG]"+msg);
        }
    }
}
let ScreenShotMIxin=function(Base){
    return class extends Base{
        takeScreenShot()
        {
            console.log("[ScreenShot] captured");
        }
    }
}

class TestCase
{
    constructor(name)
    {
        this.name=name;
    }
    run(){
        console.log("Running:"+this.name)
    }

}

//Apply both maxin
class SmartTest extends ScreenShotMIxin(LoggerMaxin(TestCase))
{
    constructor(name)
    {
        super(name);
    }
}

let t=new SmartTest("Login Flow");

t.run();
t.log("Test started");
t.takeScreenShot();