console.log("video55");


const buttn = document.getElementById("submitBtn");
const input = document.getElementById("name");

const previousName = document.getElementById("previousName");
const previousNameValue = localStorage.getItem("Hoang");

if (previousNameValue){
  previousName.innerHTML = `<b>${previousNameValue}</b>` ;
}


buttn.addEventListener("click", () => {
  console.log(input.value);
  localStorage.setItem("Hoang", input.value);
 
  document.getElementById("messenger").innerHTML = `<b>${input.value}</b>`
 
});

