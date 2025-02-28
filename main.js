
//Menu Toggle on small screen
document.getElementById("menu-icon").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("active");
});


 // Automatically updates the year
document.getElementById("year").textContent = new Date().getFullYear();