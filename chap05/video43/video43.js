console.log("video43")
const person = {
    name : "hoang",
    age : 20
}
//get data
console.log("Name: ",person.name);
console.log("Name: ",person["age"]);

//set data
console.log("person before: ",person);
person.address = "Hanoi";
person["language"] = "Vietname";

delete person.name;
console.log("person affter: ",person);
