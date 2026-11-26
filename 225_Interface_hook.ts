interface TestHook{
    (testName:string):void;

}
let beforeEachHook=function(testName:string):void{
    console.log("[Before]Setting up:",testName);
}
let afterEachHook=function(testName:string):void{
    console.log("[After]Tearing down:"+testName);
};
beforeEachHook("Login Test");