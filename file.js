var sameerkhan = "js file  is ready to use."
console.log(sameerkhan)

var menubtn = document.getElementById("openmenu-btn");

var closebtn = document.getElementById("closemenu-btn");

var navbar = document.getElementById("navbar");


console.log("=======================================");

menubtn.addEventListener("click", function opentogglemenu() {

    if (menubtn.style.display != 'none') {

        menubtn.style.display = 'none';
        closebtn.style.display = 'block';
     
        // Class naam remove karna
        navbar.classList.remove("navbar");

        navbar.classList.add("navbarchange");



    }

})

closebtn.addEventListener("click", function closetogglemenu() {
    if (closebtn.style.display != 'none') {
        closebtn.style.display = 'none';
        menubtn.style.display = 'block';

        navbar.classList.remove("navbarchange");

        navbar.classList.add("navbar");
    }
})