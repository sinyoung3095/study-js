// HTMLCollection.prototype.forEach = Array.prototype.forEach;
// HTMLCollection.prototype.filter = Array.prototype.filter;
// NodeList.prototype.filter = Array.prototype.filter;

// const check = document.querySelector("input[type=button]");
// const text = document.querySelector("input[type=text]");
// const child = document.getElementsByClassName("child");
// const adolescent = document.getElementsByClassName("adolescent");
// const adult = document.getElementsByClassName("adult");
// const td = document.querySelectorAll("td");
// check.addEventListener("click", (e) => {
//     td.forEach((data) => (data.style.backgroundColor = ""));
//     td.filter((data) => data.innerText.includes("☆")).forEach(
//         (data) => (data.innerText = data.innerText.replace("☆", ""))
//     );

//     if (text.value === "아동") {
//         child.forEach((data) => {
//             data.style.backgroundColor = "red";
//             if (data.innerText === "아동") {
//                 data.innerText = "☆아동";
//             }
//         });
//     } else if (text.value === "청소년") {
//         adolescent.forEach((data) => {
//             data.style.backgroundColor = "red";
//             if (data.innerText === "청소년") {
//                 data.innerText = "☆청소년";
//             }
//         });
//     } else if (text.value === "성인") {
//         adult.forEach((data) => {
//             data.style.backgroundColor = "red";
//             if (data.innerText === "성인") {
//                 data.innerText = "☆성인";
//             }
//         });
//     } else {
//         alert("다시 시도해주세요.");
//     }
// });

const button = document.querySelector("input[type=button]");
const input = document.querySelector("#input");
const trList = document.querySelectorAll("tbody tr");
let tempTr = null;
let tempText = null;

button.addEventListener("click", (e) => {
    let check = false;

    if (tempTr) {
        tempTr.style.background = "#fff";
        tempTr.firstElementChild.innerText = tempText;
    }

    trList.forEach((tr) => {
        const td = tr.firstElementChild;

        if (td.innerText === input.value) {
            check = true;

            tempTr = tr;
            tempText = td.innerText;

            tr.style.background = "#ef5350";
            td.innerText = "★" + input.value;
        }
    });

    if (!check) {
        alert("다시 시도해주세요.");
        input.value = "";
    }
});
