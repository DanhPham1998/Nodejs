let info = [
    { name: "danh", age: 23 },
    { name: "Khang", age: 23 },
    { name: "hung", age: 29 },
    { name: "hien", age: 26 },
    { name: "cam", age: 29 },
];
let print_info = info.filter((item, index) => {
    return item.name;
});
console.log(print_info);
