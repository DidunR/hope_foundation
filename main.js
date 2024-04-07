// let toggleButtons = document.querySelectorAll(".toggleButton");
// let textContainers = document.querySelectorAll(".textContainer");

// toggleButtons.forEach(function (button, index) {
//     button.addEventListener("click", function () {
//         var textContainer = textContainers[index];
//         if (textContainer.style.display === "none") {
//             // Плавне з'явлення тексту
//             textContainer.style.display = "block";
//             textContainer.style.opacity = "0";
//             setTimeout(function () {
//                 textContainer.style.opacity = "1";
//             }, 100);
//             button.textContent = "Hide";

//             // Прокручування до початку блока
//             textContainer.scrollIntoView({
//                 behavior: "smooth",
//                 block: "start",
//                 // inline: "nearest"
//             });
//         } else {
//             // Плавне зникнення тексту
//             textContainer.style.opacity = "0";
//             setTimeout(function () {
//                 textContainer.style.display = "none";
//             }, 0);
//             button.textContent = "Read more";
//         }
//     });
// });

// let toggleButtons = document.querySelectorAll(".toggleButton");
// let textContainers = document.querySelectorAll(".textContainer");

// toggleButtons.forEach(function (button, index) {
//     button.addEventListener("click", function () {
//         let textContainer = textContainers[index];
//         if (textContainer.style.display === "none") {
//             // Плавне з'явлення тексту
//             textContainer.style.display = "block";
//             textContainer.style.opacity = "0";
//             setTimeout(function () {
//                 textContainer.style.opacity = "1";
//             }, 100);
//             button.textContent = "Hide";
//             // Прокручування до початку блока
//             let containerOffsetTop = textContainer.closest('.container').offsetTop;
//             window.scrollTo({
//                 top: containerOffsetTop,
//                 behavior: "smooth"
//             });
//         } else {
//             // Плавне зникнення тексту
//             textContainer.style.opacity = "0";
//             setTimeout(function () {
//                 textContainer.style.display = "none";
//             }, 0);
//             button.textContent = "Read more";
//         }
//     });
// });

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
            // Якщо текст видимий, сховати його та прокрутити до початку блоку
            textContainers[index].style.display = "none";
            button.textContent = "Read more";
            // Прокрутка до початку блоку
            textContainers[index].parentNode.scrollTop = textContainers[index].offsetTop;
        }
    });
});