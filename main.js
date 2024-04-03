document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggleButton');
    const content = document.getElementById('content');

    toggleButton.addEventListener('click', function () {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});