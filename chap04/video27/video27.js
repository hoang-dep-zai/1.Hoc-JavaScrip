console.log("Video 27")
//score: Giỏi, khá, trung bình,yếu
const score = 9;
// switch (score) {
//     case 8:
//         console.log("Giỏi")
        
//         break;
//      case 6:
//         console.log("Khá")
        
//         break;
//      case 3:
//         console.log("Trung bình")
        
//         break;
     
//     default:
//         console.log("Yếu")
//         break;
// }

switch (true) {
    case (score >= 8 && score <= 10)://true === true
        console.log("Giỏi")
        
        break;
     case  (score  < 8 && score >= 6):
        console.log("Khá")
        
        break;
     case  (score  < 6 && score >= 3):
        console.log("Trung bình")
        
        break;
     
    default:
        console.log("Yếu")
        break;
}