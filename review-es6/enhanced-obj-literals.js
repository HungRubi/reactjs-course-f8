//1.Định ngĩa key: value cho object
//2.Định nghĩa method cho object
//3.Định nghĩa key cho object dưới dạng variable

// var name = 'hùng';
// var age = 22;
// var yearNow = new Date().getFullYear();
// console.log(yearNow);
// const infor = {
//     name,
//     age,
//     getBirthYear() {return yearNow - infor.age}
// }
// console.log(infor.getBirthYear());
//===========================================================================
// Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.
// Gợi ý: Sử dụng phương thức reduce
function arrToObj(arr) {
    return arr.reduce((obj,value)=>{
        obj[value[0]] = value[1];
        return obj;
    },{})
}

const obj2 = arrToObj([
    ['name', 'Duc Long'], 
    ['age', 18], 
    ['address', 'Ha Noi']
])
console.log(obj2)