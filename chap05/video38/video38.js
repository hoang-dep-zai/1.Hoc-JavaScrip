console.log("video38")
const names = ["cuoc", "song", "muon","mau","bla bla"];
//index = 0, arr[index]
console.log(names[0]);
console.log(names[2]);
console.log(names[10]);

names [2] = "uppdate name";
console.log(names[2]);

//thêm phần tử vào cuối mảng với push();
// vào đầu mảng với unshift()

// //xóa phần tử ở cuối mảng với 
// pop();
//  ở cuối mảng với 
// shift()
console.log("before",names);
names.push("hoàng", 123);
names.unshift(null);

names.pop();
names.shift();

console.log("after",names);


