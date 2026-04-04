console.log("video52");

const myBtnElement = document.getElementById("myBtn");

const btnBackElement = document.getElementById("btnBack");

const myTextElement = document.getElementById("myText");

myBtnElement.addEventListener("click" ,() =>{
    console.log("you click a Butn");

    myTextElement.innerText = "Just change the content with JavaScript";
})

btnBackElement.addEventListener("click" ,() =>{
    console.log("you click a btnBack");
    
    // myTextElement.innerText = "Just change the content with JavaScript";

    myTextElement.innerHTML = "<strong>Hello,<em>  wellcome to Vietnamse </em></strong>";
})


