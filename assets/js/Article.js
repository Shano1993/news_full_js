let header = document.querySelector("#header");

export let article = function () {
    this.display = function () {
        for (let i = 0; i < 20; i++) {
            let divArticle = document.createElement("div");
            divArticle.className = "article";
            header.append(divArticle);
        }
    }
}