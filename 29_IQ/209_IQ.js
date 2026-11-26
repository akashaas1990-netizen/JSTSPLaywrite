class Bug
{
    constructor(title,severity)
    {
        this.title=title;
        this.severity=severity;
    }
    display()
    {
        console.log("["+this.severity+"]"+this.title);
    }
}
let b1=new Bug("Login CRash","Critical");
let b2=new Bug("Type in footer","Low");
b1.display();
b2.display();