console.log("lap4");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const submitBtn = document.getElementById("submit");



submitBtn.addEventListener("click", () => {
    const email = emailElement.value;
    const password = passwordElement.value;

    if(email === "nguyenhuyhoang211226@gmail.com" && password === "211226"){
        alert("Login successful");
        window.location.href = "welcome.html"
    }else{
        alert("Username or password is incorrect");
        emailElement.style.borderColor = "red";
    }

   
})