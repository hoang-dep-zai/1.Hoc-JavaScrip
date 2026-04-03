console.log("video41")
const  ages = [ 10, 20, 30, 25, 18,11];
const agesX2 =  ages.map((item, index) => {
    return item * 2;
})

const agesGrateThan8 =  ages.filter((item, index) => {
    return item > 20;
})
console.log(" orginal: ", ages);
console.log(" agesX2: ", agesX2);
console.log(" agesGrateThan8: ", agesGrateThan8);
