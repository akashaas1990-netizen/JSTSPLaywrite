class Person
{
    //hide my variables
    #child1;
    #child2;
    constructor(name,child1,child2)
    {
        this.name=name;
        this.#child1=child1;
        this.#child2=child2;
    }
    getChild()
    {
        return this.#child1+this.#child2;
    }
    setChild(changed_name)
    {
        this.#child1=changed_name;
        this.#child2=changed_name;
    }
     
}
let p=new Person("Akasha","Andrew","Jemma");
console.log(p.child1);
console.log(p.getChild());
p.setChild("Ajay");
console.log(p.getChild());