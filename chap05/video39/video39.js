console.log("video 39");

const MyClass = ["Hàn","Hoàng", "Vy","My","Soa"];

console.log(MyClass, MyClass.length);

// for(let i = 0; i < MyClass.length; i++){console.log("indext=",i," and value =",MyClass[i])
// }
// console.log("============")

// for(let i = 1; i < MyClass.length; i++){console.log("indext=",i," and value =",MyClass[i-1])
//     ;
// }

//for - each
MyClass.forEach(function(value, index)
{
    console.log("value:", value,"index:",index)
})
console.log("==============");
MyClass.forEach((value, index) => {
   console.log("value:", value,"index:",index) 
})
    
