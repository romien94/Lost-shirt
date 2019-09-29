(function() {
    let openingBtn = document.querySelector(".sidebar__hamburger");
    let closingBtn = document.querySelector(".sidebar__close");
    let sidebar = document.querySelector(".sidebar");

    openingBtn.addEventListener("click", function() {
        event.preventDefault();
        sidebar.classList.add("sidebar--open");
    });

    closingBtn.addEventListener("click", function() {
        event.preventDefault();
        sidebar.classList.remove("sidebar--open");
    });
})();