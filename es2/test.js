function openMenu(){
    var header = document.getElementById("header")
    header.classList.toggle("toggleMenu");

    var mobileMenu = document.getElementById("mobileMenu")
    header.classList.toggle("mobileMenuOpen");
}