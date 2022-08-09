const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
    // console.log(e.target.dataset.id)
    const id = e.target.dataset.id;

    if (id) {
        // remove selected from other buttons
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
    // hide oder articles
    articles.forEach((article) => {
        article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
}

});
