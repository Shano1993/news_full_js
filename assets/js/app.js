import "../styles/style.scss";
import {article} from "./Article";

let divList = document.getElementsByClassName("article");

const requestUrl = 'https://newsapi.org/v2/top-headlines?' +
    'country=fr&' +
    'apiKey=962922d72d2149b1b2857257139bf165';

let xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.responseType = "json";

xhr.onload = function () {
    if (xhr.status !== 200) {
        return;
    }
    let response = xhr.response;
    for (let i = 0; i < divList.length; i++) {
        let titleArticle = document.createElement("h2");
        titleArticle.innerHTML = response.articles[i].title;
        let authorArticle = document.createElement("span");
        if (response.articles[i].author === null) {
            response.articles[i].author = "Inconnu";
        }
        authorArticle.innerHTML = "Auteur : " + response.articles[i].author;
        let imageArticle = document.createElement("img");
        imageArticle.src = response.articles[i].urlToImage;
        divList[i].append(titleArticle);
        divList[i].append(imageArticle);
        divList[i].append(authorArticle);
    }
    console.log(response)
}

xhr.send();

let newArticle = new article();
newArticle.display();