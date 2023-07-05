//first task
let eventinputvalue = document.getElementById("eveninputid");
let inputTablev = document.getElementById("inputTable");


const myfirsteven = () => {
    for (let i = 0; i <= eventinputvalue.value; i++) {
        if (i % 2 == 0) {
            document.getElementById("evenTask").innerHTML += i + `<br>`;
            console.log(i)
        }
    }
}

// first task with diffrent way
// second
function myFunction(value1, value2) {
    for (let i = value1; i < value2; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

// console.log(myFunction(300, 400));

function myTableFunc() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById("tabletask").innerHTML += inputTablev.value * i + `<br>`;
    }
}

// third task length converter

let mylengthvalue = document.getElementById("inputlconvert");

function lengthConverter() {
    let value = mylengthvalue.value / 1.609;
    document.getElementById("lengthanswer").innerHTML = `miles : ` + value;
}

// fourth task of sum of array

let numberarr = [1, 2, 3, 34, 4, 5, 5, 6, 6, 7, 7, 7, 7, 7, 77677];
let sumarr = numberarr.reduce((om, ok) => om + ok);
console.log(sumarr)

// five task reverse array\

let myrevearr = [1, 2, 3, 4, 5, 6, 56];
let lengthz = myrevearr.length - 1
let myreversedarr = [];

for (var i = lengthz; i >= 0; i--) {
    myreversedarr.push(myrevearr[i])
}
console.log(myreversedarr)

// six task -- sort array from lower to highest

let x = [1, 2, 3, 44, 7, 8, 99, 122, 33];
x.sort((a, b) => a - b);
console.log(x)


//  seven task  function that filterout negative numbers

x = [1, 2, 3, -34, 21, 43, 54, -32,]
x.filter((x) => x => 0);
console.log(x)







