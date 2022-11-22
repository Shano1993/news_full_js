let header = document.querySelector("#header");
let divList = document.getElementsByClassName("article");

export let article = function () {
    this.display = function () {
        for (let i = 0; i < 20; i++) {
            let divArticle = document.createElement("div");
            divArticle.className = "article";
            header.append(divArticle);
        }
    }

    this.image = function (url, pos, tag) {
        let newImage = document.createElement(tag);
        divList[pos].append(newImage);
        newImage.src = url;
    }

    this.element = function (elem, pos, tag) {
        let newElement = document.createElement(tag);
        divList[pos].append(newElement);
        newElement.innerHTML = elem;
    }
}