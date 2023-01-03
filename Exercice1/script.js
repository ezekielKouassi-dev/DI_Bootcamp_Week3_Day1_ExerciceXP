/**
 * @author ezekiel kouassi
 */

/* ************** Exercice 1 *********** */

// 1 - retrieve the div and console log it

let div = document.getElementById("container");
console.log(div);

// 2 - change pete to richard
let firstElementWithClassList = document.querySelector(".list").children;
for(let li of firstElementWithClassList) {
    if(li.textContent == "Pete") {
        li.textContent = "richard";
    }
}

// 3 - change each first name of the two ul to your name
let uls = document.querySelectorAll(".list");

for(let elem of uls) {
    let listOfLi = elem.children;
    listOfLi[0].textContent = "ezekiel"
}

// 4 - delete li that contains textnodes sarah

for(let i of uls[1].children) {
    if(i.textContent == "Sarah") {
        i.remove();
    }
}

/* ************ End Exercice 1 ************ */