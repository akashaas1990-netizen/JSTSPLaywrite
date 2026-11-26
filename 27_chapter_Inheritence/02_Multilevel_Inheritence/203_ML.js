//GRandFather->Father->Son
class BasePage
{
    constructor(name)
    {
        this.name=name;
    }
    Open()
    {
        console.log("[OPEN]"+this.name);
    }
}
class AuthPage extends BasePage
{
   
//    constructor(username,password)
//    {
//      super(username);
//     this.username=username;
//     this.password=password;
   
//    }

    LoginPage(user,password)
    {
        console.log("[LOGIN]"+user+" "+password);
    }
}
class AdminPage extends AuthPage
{
    
     constructor()
    {
        super("Admin Panel");
    }
    manageUsers()
    {
        console.log("[ADMIN] Managing Users");
    }
}

let admin=new AdminPage();
admin.Open();
admin.LoginPage("Akasha","12345");
admin.manageUsers();