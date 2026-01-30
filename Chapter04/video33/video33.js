console.log("video 33")

let globalVar = "Tôi là biến toàn cục !";
function show() {
    console.log(globalVar);//truy cập được
}
show();
console.log(globalVar);//truy cập được 

function sayHi() {
    let name1 = " Hoàng dep zai";
    console.log("Hi",name1);

    if(true){
        let x = 10;
        const y = 20;
        console.log(x, y);// Truy cập được

    }

    console.log(x);//lỗi: x not is defined
}
sayHi();
console.log(name1);//Lỗi: name1 is not defined


// các điều phải nhớ:
// - code chạy từ trên xuống dưới
// - khai báo và sử dụng biến sô chỉ có tác dụng trong dấu đóng mở ngoặc nhọn