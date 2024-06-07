(() => {
    const gridBtn = document.querySelector(".grid-btn");
    const rowBtn = document.querySelector(".row-btn");
    const gridIcon = document.querySelector(".grid-icon");
    const gridIconActive = document.querySelector(".grid-icon-active");
    const rowIcon = document.querySelector(".row-icon");
    const rowIconActive = document.querySelector(".row-icon-active");
    const cardsList = document.querySelector(".cards-list");

    gridBtn.addEventListener("click", function () {
        gridIcon.classList.add("is-active");
        gridIconActive.classList.add("is-active");
        rowIcon.classList.remove("is-active");
        rowIconActive.classList.remove("is-active");
        cardsList.classList.add("grid-col");
    });

    rowBtn.addEventListener("click", function () {
        rowIcon.classList.add("is-active");
        rowIconActive.classList.add("is-active");
        gridIcon.classList.remove("is-active");
        gridIconActive.classList.remove("is-active");
        cardsList.classList.remove("grid-col");
    });
  })();