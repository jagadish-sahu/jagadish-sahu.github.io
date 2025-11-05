// Wait until the HTML content is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // 1. Find the NEW checkbox element by its ID
    const toggleCheckbox = document.getElementById('theme-toggle-checkbox');

    // 2. Find the <body> element
    const body = document.body;

    // 3. Add an event listener: "When the checkbox state CHANGES, run this function"
    toggleCheckbox.addEventListener('change', () => {

        // 4. Toggle the 'dark-mode' class on the <body>
        // This is the same logic as before!
        body.classList.toggle('dark-mode');

        // No more icon/text changing needed!
    });

});
