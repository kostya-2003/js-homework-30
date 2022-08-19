// 1
// Fibonachi
function fibonachiNumber(n) {
    if (n < 2) {
      return n;
    }
    return fibonachiNumber(n - 1) + fibonachiNumber(n - 2);
  }
  
console.log(fibonachiNumber(3));
console.log(fibonachiNumber(5));
console.log(fibonachiNumber(8));

// Factorial
function factorial(x) {

    if (x == 0) {
        return 1;
    }

    else {
        return x * factorial(x - 1);
    }
}

console.log(factorial(4));

// 2

function arrayName(){
    const array = ["Armen", "Garik", "Gevorg", "Anna", "Narek"];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);  
    }

    return array;
}

arrayName();

let num = 0;
function recursiaNumber(x) {
    
    if (num === x) {
        return;
    }

    console.log(num++);
    recursiaNumber(12);
    return num;
}

recursiaNumber();

function sort(){
    let citySort = ["Yerevan", "Vanadzor", "Gyumri", "Aparan", "Spitak"];
    for(let i = 0; i < citySort.length; i++){
        citySort.sort();
        console.log(citySort[i]);
    }
    return citySort;
}

sort();

function math(x, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
}
  
console.log((math(2, 4) ));

function numberCount(number) {
    const newNumber = number - 1;
    
    if (newNumber > 0) {
        numberCount(newNumber);
    }

    console.log(number);
}

numberCount(4);

// 3

// const userName = "Kostya";
// const lastName = "Haxverdyan";
// const items = document.querySelector(".items");
// const text = document.createElement("p");

// text.style.textAlign = "center";
// text.style.margin = "0 200px";


// items.insertAdjacentHTML("beforebegin", `
//     <h2 style="text-align :center">JS HomeWorks</h2>
// `);

// items.insertAdjacentHTML("afterBegin", `
//     <h4 style="text-align :center">My Name is ${userName} ${lastName}</h4>
// `);

// items.insertAdjacentElement("afterend", text)

// text.insertAdjacentText("afterbegin", `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum accusantium corrupti, officia perferendis vero officiis voluptatem voluptates inventore porro. Eligendi quos quae minus adipisci illo earum odio reprehenderit possimus qui.`);

// 4

const input = document.querySelector("input");
const listName = document.querySelectorAll("span");

input.addEventListener("input", () => {
    for(let i = 0; i < listName.length; i++){
        listName[i].style.display = "block";

        if(listName[i].textContent.toLowerCase().search(input.value) != -1){
            listName[i].style.display = "block";
        }else{
            listName[i].style.display = "none";
        }
    }
});


