// Wait until the HTML content is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // 1. Find the button on the page
    const toggleButton = document.getElementById('theme-toggle');
    
    // 2. Find the <body> element
    const body = document.body;
    
    // 3. Add an event listener: "When the button is clicked, run this function"
    toggleButton.addEventListener('click', () => {
        
        // 4. Toggle the 'dark-mode' class on the <body>
        // .toggle() is a special function:
        // - If the class is there, it removes it.
        // - If the class is NOT there, it adds it.
        body.classList.toggle('dark-mode');
        
        // (Optional) Change button text
        if (body.classList.contains('dark-mode')) {
            // If it's dark mode, show the sun
            toggleButton.textContent = "☀️";
        } else {
            // If it's light mode, show the moon
            toggleButton.textContent = "🌙";
        }
        
    });

});
