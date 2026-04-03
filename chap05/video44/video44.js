console.log("video44")
const sv1 = 
    {
        userName: "Hoang",
        score : 3
    }
const sv2 = 
    {
        userName: "Huong",
        score : 7
    }
const sv3 = 
    {
        userName: "yen",
        score : 4
    }
const sinhVien = [
        sv1,sv2,sv3
    ]
    console.log("check sinh vien",sinhVien)
    
    // sinhVien.forEach((item,index) => {
    //     console.log(">> index =" ,index , "name = ", intem.userName)
    // })

    const persion = {
        email : "Hoang@hmail.com",
        age : 20,
        address : "Ha Noi"
    }
//    for( let key in persion){
//     console.log(key,pesion[key])
//    }

   for( let [key,value] of Object.entries(persion)){
    console.log(key,value)
   }