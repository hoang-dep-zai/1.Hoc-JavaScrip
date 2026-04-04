console.log("video52");

const myTextElement = document.getElementById("myText");
const myChangeElement = document.getElementById("myChange");
const myClickElement = document.getElementById("myClick");

myClickElement.addEventListener("click", () => {
    console.log("you click a button");
    myTextElement.style.color = "red";
    myTextElement.style.backgroundColor = "green";
    //{key, value} => {color: "red", backgroundColor: "green"}

    myTextElement.classList.add("london", "passport");
})

myChangeElement.addEventListener("click", () => {
    console.log("you click a change button");
    myTextElement.style.color = "black";
    myTextElement.style.backgroundColor = "white";

    myTextElement.classList.remove("london", "passport");
})