/*
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
*/


// English-Spanish Toggle with localStorage
// Function to toggle language based on stored preference
function toggleLanguage() {
    const contentEnglish = document.querySelectorAll('.eng');
    const contentSpanish = document.querySelectorAll('.spa');

    // Check the current language preference from localStorage
    const currentLanguage = localStorage.getItem('preferredLanguage');

    // Determine which language to display based on the current preference
    if (currentLanguage === 'english') {
        showEnglishContent(contentEnglish, contentSpanish);
    } else {
        showSpanishContent(contentEnglish, contentSpanish);
    }
}


// Function to show English content and store language preference
function showEnglishContent(contentEnglish, contentSpanish) {
    contentEnglish.forEach(element => {
        element.style.display = 'block'; // Show English content
        element.classList.add('eng'); // Add English class
        element.classList.remove('spa'); // Remove Spanish class
    });

    contentSpanish.forEach(element => {
        element.style.display = 'none'; // Hide Spanish content
        element.classList.remove('eng'); // Remove English class
        element.classList.add('spa'); // Add Spanish class
    });

    // Store language preference in localStorage
    localStorage.setItem('preferredLanguage', 'english');
}

// Function to show Spanish content and store language preference
function showSpanishContent(contentEnglish, contentSpanish) {
    contentEnglish.forEach(element => {
        element.style.display = 'none'; // Hide English content
        element.classList.remove('eng'); // Remove English class
        element.classList.add('spa'); // Add Spanish class
    });

    contentSpanish.forEach(element => {
        element.style.display = 'block'; // Show Spanish content
        element.classList.add('eng'); // Add English class
        element.classList.remove('spa'); // Remove Spanish class
    });

    // Store language preference in localStorage
    localStorage.setItem('preferredLanguage', 'spanish');
}

// Document ready event listener to toggle language based on stored preference
document.addEventListener('DOMContentLoaded', () => {
    toggleLanguage(); // Initial toggle based on stored preference

    // Add click event listener to language toggle button
    const toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            // Toggle language and update stored preference
            const currentLanguage = localStorage.getItem('preferredLanguage');
            if (currentLanguage === 'english') {
                showSpanishContent(document.querySelectorAll('.eng'), document.querySelectorAll('.spa'));
            } else {
                showEnglishContent(document.querySelectorAll('.eng'), document.querySelectorAll('.spa'));
            }
        });
    }
});


/*
//Second toggle attempt snippet
// Function to show English content and store language preference
function showEnglishContent(contentEnglish, contentSpanish) {
    contentEnglish.forEach(element => {
        element.style.display = 'block'; // Show English content
        element.classList.add('eng'); // Add English class
        element.classList.remove('spa'); // Remove Spanish class
    });

    contentSpanish.forEach(element => {
        element.style.display = 'none'; // Hide Spanish content
        element.classList.remove('eng'); // Remove English class
        element.classList.add('spa'); // Add Spanish class
    });

    // Store language preference in localStorage
    localStorage.setItem('preferredLanguage', 'english');
}

// Function to show Spanish content and store language preference
function showSpanishContent(contentEnglish, contentSpanish) {
    contentEnglish.forEach(element => {
        element.style.display = 'none'; // Hide English content
        element.classList.remove('eng'); // Remove English class
        element.classList.add('spa'); // Add Spanish class
    });

    contentSpanish.forEach(element => {
        element.style.display = 'block'; // Show Spanish content
        element.classList.add('eng'); // Add English class
        element.classList.remove('spa'); // Remove Spanish class
    });

    // Store language preference in localStorage
    localStorage.setItem('preferredLanguage', 'spanish');
}

// Document ready event listener to toggle language based on stored preference
document.addEventListener('DOMContentLoaded', () => {
    // Check if language preference is stored in localStorage
    const currentLanguage = localStorage.getItem('preferredLanguage');
    
    // Check if the preference is English, if not, default to Spanish
    if (currentLanguage === 'english') {
        showEnglishContent(document.querySelectorAll('.eng'), document.querySelectorAll('.spa'));
    } else {
        showSpanishContent(document.querySelectorAll('.eng'), document.querySelectorAll('.spa'));
    }

    // Add click event listener to language toggle button
    const toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            // Toggle language and update stored preference
            const currentLanguage = localStorage.getItem('preferredLanguage');
            if (currentLanguage === 'english') {
                showSpanishContent(document.querySelectorAll('.eng'), document.querySelectorAll('.spa'));
            } else {
                showEnglishContent(document.querySelectorAll('.eng'), document.querySelectorAll('.spa'));
            }
        });
    }
});

*/