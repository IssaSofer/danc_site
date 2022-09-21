let btsearch = document.querySelector(".btsearch");
let textsearch = document.getElementById("search");
btsearch.onclick = function() {
    if (textsearch.style.display == "block") {
        textsearch.style.display = "none";
        btsearch.className = "fa-solid fa-magnifying-glass btsearch";

    } else {
        textsearch.style.display = "block";
        btsearch.className = "fa-solid fa-circle-xmark btsearch";
    }
};

// menu togale
let bar = document.querySelector(".bar");
let menu = document.querySelector(".menu");
let search = document.querySelector(".search");
if (window.scrollX <= 576) {
    bar.onclick = function() {
        if (menu.style.display == "block" & search.style.display == "flex") {
            menu.style.display = "none";
            search.style.display = "none";

        } else {
            menu.style.display = "block";
            search.style.display = "flex";
        }
    }
}


// count number Statistics
// window.addEventListener('scroll', () => {
//     let items = document.querySelectorAll(".item-count");
//     let count_num = 4000;
//     //console.log(Math.ceil(window.scrollY));
//     if (Math.ceil(window.scrollY) == 3100) {
//         items.forEach((item) => {
//             let startVal = 0;
//             let endVal = parseInt(item.getAttribute("data-count"));
//             let duration = Math.floor(count_num / endVal);
//             let counter = setInterval(function() {
//                 startVal += 1;
//                 item.textContent = startVal + "+";
//                 if (startVal == endVal) {
//                     clearInterval(counter);
//                 }
//             }, duration);
//         });
//     }
// });