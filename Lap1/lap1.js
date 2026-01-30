console.log("Lap 01")
const  fullName = "Nguyễn Huy Hoàng";
const birthYear = 2006;
const isStudent = false;

const today = new Date();
const currentYear = today.getFullYear();

console.log(currentYear , typeof currentYear);

const calculateAge = currentYear - birthYear;

console.log(`
    Tên: ${fullName}
    Tuổi: ${calculateAge}
    Sinh viên: ${isStudent}
    `)
    console.log("==================")