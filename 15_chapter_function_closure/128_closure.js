function startBrowser()
{
    let name="edge";
    function installBrowser()
    {
        console.log("bevarsi-->",name);
    }
    return installBrowser;
}

const runfunc=startBrowser();
runfunc();
//Closure--->Inner function access to its variable even if outer function has 
// returned

