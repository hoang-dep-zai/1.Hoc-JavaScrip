console.log("video55");


const buttn = document.getElementById("submitBtn");
const input = document.getElementById("name");

buttn.addEventListener("click", () => {
  console.log(input.value);
 
  document.getElementById("messenger").innerHTML = `<b>${input.value}</b>`
 
});

