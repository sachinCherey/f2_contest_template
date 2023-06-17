/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  let arr1 = arr.filter((x) => x.profession === "developer");
  arr1.map((x) => console.log(x));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((x) => {
    if (x.profession === "developer") {
      console.log(x);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let obj = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let removeObj = arr.filter((x) => x.profession !== "admin");
  console.log(removeObj);
}

function concatenateArray() {
  let arr3 = [
    { id: 4, name: "johncena", age: "28", profession: "admin" },
    { id: 5, name: "jackson", age: "26", profession: "developer" },
    { id: 6, name: "karenGillen", age: "14", profession: "admin" },
  ];

  let res = arr.concat(arr3);
  console.log(res);
}


