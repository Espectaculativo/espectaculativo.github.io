
//This codes creates the fade-in effect for the heading title
let espectaculativo = document.getElementById("heading-title");

espectaculativo.onclick = function (){
    if (espectaculativo.innerHTML === 'Lucas Seamanduras') {
        espectaculativo.classList.remove('fade-in');
        espectaculativo.classList.add('fade-out');
        setTimeout(function() {
            espectaculativo.innerHTML = 'Espectaculativo🎆🪙🔮';
            espectaculativo.classList.remove('fade-out');
            espectaculativo.classList.add('fade-in');
        }, 500);
    } else {
        espectaculativo.classList.remove('fade-in');
            espectaculativo.classList.add('fade-out');
            setTimeout(function() {
                espectaculativo.innerHTML = 'Lucas Seamanduras';
                espectaculativo.classList.remove('fade-out');
                espectaculativo.classList.add('fade-in');
            }, 500);
    };
}