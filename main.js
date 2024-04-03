// Отримання посилань на всі кнопки та контейнери тексту
var toggleButtons = document.querySelectorAll(".toggleButton");
var textContainers = document.querySelectorAll(".textContainer");

// Додавання обробника події для кожної кнопки
toggleButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        // Перевірка поточного стану видимості тексту
        if (textContainers[index].style.display === "none") {
            // Якщо текст прихований, показати його
            textContainers[index].style.display = "block";
            button.textContent = "Hide";
        } else {
            // Якщо текст видимий, сховати його
            textContainers[index].style.display = "none";
            button.textContent = "Read more";
        }
    });
});