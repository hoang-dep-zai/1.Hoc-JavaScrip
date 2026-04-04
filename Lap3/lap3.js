console.log("lap3")

pr1 = {
    name : "iphone 14",
    price : 1000,
    inStock : true
}
pr2 = {
    name : "Microsoft Surface Pro 8",
    price : 2000,
    inStock : false
}
pr3 = {
    name : "iphone 11 Pro Max",
    price : 11000,
    inStock : true
}
pr4 = {
    name : "macbook pro 16 inch",
    price : 22000,
    inStock : true
}
pr5 = {
    name : "linux book",
    price : 11000,
    inStock : false
}



const product = [pr1,pr2,pr3,pr4,pr5];
console.log("1. check name product:",product[0].name);
console.log("2. check product:",product);

const product1 =[pr1,{
    name : pr2.name,
    price : 150,
    inStock : pr2.inStock
},pr3,pr4,pr5];

console.log("3. check product 1:",product1);

product.push ( {
    name : "samsung galaxy s22",
    price : 1200,
    inStock : true
})

product.push({
    name: "Iphone 17 Pro Max",
    price : 40000,
    inStock : false
})
console.log("4. check product push:",product);

product.pop();
console.log("5. check product remove:",product);
console.log("6. ==============");
product.forEach((intem, index) => {
    console.log("product name:",intem.name);
});
console.log("=================");

 const Pricelist = product.map((item) => {
    return item.price;
});
console.log("7. PriceList:", Pricelist);

const inStocklist = product.filter((item, index)=> 
     item.inStock === true
)

console.log("8. inStockList:", inStocklist);
console.log("9.==================");
for (const key in pr1) {
    console.log(key," : ", pr1[key])
}





