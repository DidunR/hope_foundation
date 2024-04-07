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

let toggleButtons = document.querySelectorAll(".toggleButton");
let textContainers = document.querySelectorAll(".textContainer");

toggleButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        let textContainer = textContainers[index];
        if (textContainer.style.display === "none") {
            // Плавне з'явлення тексту
            textContainer.style.display = "block";
            textContainer.style.opacity = "0";
            setTimeout(function () {
                textContainer.style.opacity = "1";
                // Прокручування до початку блока після того, як контент повністю з'явився
                textContainer.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                });
            }, 100);
            button.textContent = "Hide";
        } else {
            // Плавне зникнення тексту
            textContainer.style.opacity = "0";
            setTimeout(function () {
                textContainer.style.display = "none";
            }, 0);
            button.textContent = "Read more";
        }
    });
});