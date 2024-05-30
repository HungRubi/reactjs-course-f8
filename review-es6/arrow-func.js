// không thể dùng arrow func để khởi tạo contructor

const sum = (a, b) => a + b;
console.log(sum(2,5));

const obj = (name, age) => ({name:name, age:age});
console.log(obj('hùng','nguyễn'));

const course = {
    name: 'ReactJS - F8',
    getName: function () {
        return this.name;//context
    },
    getName1: () => {
        return this.name;// arrow func ko có context lên nó k hiển thị hoặc là giá trị underfind
    }
}
console.log(course.getName());
console.log(course.getName1());