"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const ДааButton = document.querySelector(".btn--Даа");
const НеаButton = document.querySelector(".btn--Неа");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let НеаCount = 0;

ДааButton.addEventListener("click", handleДааClick);

НеаButton.addEventListener("click", function () {
  if (play) {
    НеаCount++;
    const imageIndex = Math.min(НеаCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeДааButton();
    updateНеаButtonText();
    if (НеаCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleДааClick() {
  titleElement.innerHTML = "ДАА!! Жаныым жаным";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeДааButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  ДааButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(НеаCount) {
  const messages = [
    "Неа",
    "Жаным, ты уверена?",
    "Точно точноо?",
    "Тууй жан :(",
    "Ты дурашкаа..",
    "Я сейчас буду плакать..",
  ];

  const messageIndex = Math.min(НеаCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateНеаButtonText() {
  НеаButton.innerHTML = generateMessage(НеаCount);
}
