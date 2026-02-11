console.log("lap 2");


const marks = (diemToan, diemVan, diemAnh) => {
    return (diemToan + diemVan + diemAnh) / 3;
}

const rank = (mark) => {
    if (mark <= 10 && mark > 9){
        return"Xuất sắc";
        
    }
    else if (mark <= 9 && mark > 8.5){
        return"giỏi";
        

    }
    else if (mark <= 8.5 && mark > 7){
        return"khá";
       

    }
    else if (mark <= 7 && mark > 5){
        return"trung bình";
        

    }
    else{
        return"Kém ";
     

    }
}
// main
const toán = 10;
const văn = 9;
const anh = 5;

const diemTrungBinh = marks(toán, văn, anh);


console.log(`
    Điểm trung bình: ${diemTrungBinh}
    Xếp loại: ${rank(diemTrungBinh)
    }`);