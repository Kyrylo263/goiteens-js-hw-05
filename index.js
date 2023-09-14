// 1.
// Написати скрипт відкриття та закриття модального вікна по кнопці.

const backdrop = document.querySelector(".backdrop");
const openModal = document.querySelector('[data-action="open-modal"]');
const closeModal = document.querySelector('[data-action="close-modal"]');
openModal.addEventListener("click", () => {
    backdrop.style.display = "flex";
});
closeModal.addEventListener("click", () => {
    backdrop.style.display = "none";
});

// 2.
// Напиши скрипт в якому є три радіобатони зі значенями кольрів. 
// При обиранніна будь якого колір фону боді змінюється відповідно

const red = document.querySelector('[value="red"]');
const white = document.querySelector('[value="white"]');
const green = document.querySelector('[value="green"]');
red.addEventListener("click", () => {
    document.body.style.background = "red";
});
white.addEventListener("click", () => {
    document.body.style.background = "white";
});
green.addEventListener("click", () => {
    document.body.style.background = "green";
});

// 3.
// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input),
// підставляє його поточне значення в span#name-output. якщо 
// інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const firstH = document.querySelector("h1");
const span = document.querySelector("#output");
const nameInput = document.querySelector("#name-input");
nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() !== "") {
        firstH.style.display = "flex";
        span.textContent = nameInput.value.trim();
    }
    else {
        firstH.style.display = "flex";
        span.textContent = "незнайомець";
    };
});

// 4.
// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.

const validInput = document.querySelector("#validation-input");
validInput.addEventListener("blur", () => {
    console.log(validInput.value.length);
    if (validInput.getAttribute('data-length') > validInput.value.length) {
        validInput.classList.remove('valid');
        validInput.classList.add('invalid');
    } else {
        validInput.classList.remove('invalid');
        validInput.classList.add('valid');
    };
});

// 5.
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і
// змінює інлайн-стиль span#text оновлюючи властивість font-size.
// В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const sizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
sizeControl.addEventListener("input", () => {
    spanText.style.fontSize = `${sizeControl.value}px`;
});