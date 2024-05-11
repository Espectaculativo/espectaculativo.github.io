
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

/*
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
$(document).ready(function() {
    // Function to update gradient on mousemove
    $('.jumbotron').on('mousemove', function(event) {
      var x = event.pageX - $(this).offset().left;
      var y = event.pageY - $(this).offset().top;
      var radius = 400;
      $(this).css('background', 'radial-gradient(circle at ' + x + 'px ' + y + 'px, #ff0000, #0000ff ' + radius + 'px)');
    });
  
    // Reset gradient on mouseout
    $('.jumbotron').on('mouseout', function() {
        //Linear background gradient
      $(this).css('background', 'linear-gradient(to bottom, #ff0000, #0000ff)');
    });
  });

 

  $(document).ready(function() {
    var lastX, lastY;
  
    // Function to update gradient on mousemove
    $('.jumbotron').on('mousemove', function(event) {
      var x = event.pageX - $(this).offset().left;
      var y = event.pageY - $(this).offset().top;
      var radius = 300;
      lastX = x;
      lastY = y;
      $(this).css('background', 'radial-gradient(circle at ' + x + 'px ' + y + 'px, #ff0000, #0000ff ' + radius + 'px)');
    });
  
    // Function to reset gradient
    function resetGradient() {
      $('.jumbotron').css('background', 'linear-gradient(to bottom, #ff0000, #0000ff)');
    }
  
    // Reset gradient on mouseout
    $('.jumbotron').on('mouseout', function() {
      resetGradient();
    });
  
    // Keep gradient in last position on mouseout
    $('.jumbotron').on('mouseout', function() {
      $(this).css('background', 'radial-gradient(circle at ' + lastX + 'px ' + lastY + 'px, #ff0000, #0000ff)');
    });
  });
  */