import "../styles/style.scss";
import {article} from "./Article";
import {request} from "./Api";

let darkMode = document.querySelector("#switch2");
let whiteMode = document.querySelector("#switch1");
whiteMode.style.display = "none";

let newArticle = new article();
newArticle.display();

darkMode.addEventListener("click", function () {
    document.body.className = "dark";
    darkMode.style.display = "none";
    whiteMode.style.display = "block";
})

whiteMode.addEventListener("click", function () {
    document.body.className = "light";
    whiteMode.style.display = "none";
    darkMode.style.display = "block";
})

request();
