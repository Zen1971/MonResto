//détecter lorsque l'on scroll
window.onscroll = function() {sticky()};
//récupérer le header par l'ID de sticky-header
let header = document.getElementById('sticky-header');
//récupérer la position du menu sur la page
let stickyComponent = header.offsetTop;
//faire la fonction
function sticky(){
    if(window.scrollY > stickyComponent){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
}