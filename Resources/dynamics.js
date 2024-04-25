
//Heading Title Toggle with fade in-out effect
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

//Second language toggle
function toggleLanguage() {
    // Select all elements with class "english" or "spanish"
    const languageElements = document.querySelectorAll('.eng, .spa');

    // Loop through each element
    languageElements.forEach(element => {
        // Check the current display state of the element
        const isSpanish = element.classList.contains('spa');

        // Toggle the content based on the current display state
        if (isSpanish) {
            // Element is currently displaying English content, switch to Spanish
            element.style.display = 'none'; // Hide English
        } else {
            // Element is currently displaying Spanish content, switch to English
            element.style.display = 'block'; // Show English
        }

        // Toggle the class names to switch between English and Spanish
        element.classList.toggle('eng');
        element.classList.toggle('spa');
    });
}