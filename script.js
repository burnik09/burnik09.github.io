// return to the top of the page

let button = document.getElementById("button");
window.onscroll = function ()
{
    scrollFunction();
};
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }
}
function topFunction()
{
    document.documentElement.scrollTop = 0;
}

// navigation fixed

window.onscroll = function() {
    let navbar = document.getElementById("navigation");
    if (window.scrollY > 20) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
};