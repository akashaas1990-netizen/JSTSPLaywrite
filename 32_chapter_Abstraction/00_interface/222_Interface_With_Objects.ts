interface BasePage {
    url: string;
    title: string;
}

interface LoginPage extends BasePage {
    userNameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}

interface FreeTrailPage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string;
}

const loginpage: LoginPage = {
    url: "/login",
    title: "LoginPage",
    userNameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-btn"
};

const freetrailPage: FreeTrailPage = {
    url: "/login",
    title: "LoginPage",
    usernameSelector: "#username",
    submitButtonSelector: "#submit"
};

console.log("URL:", loginpage.url);
console.log("Title:", loginpage.title);
console.log("username field", loginpage.userNameSelector);