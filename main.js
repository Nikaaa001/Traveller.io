// Created By Nika Titilokashvili

// lang-open/close
const vector0 = document.querySelector('.vector-down')
const vector1 = document.querySelector('.amis-dedac')
const lang = document.querySelector('.lang-drop')
var a;
// lang-open/close



// burger-open/close
const burgerMenu = document.querySelector('.burger__menu-cont')
var b;
// burger-open/close

// En-cont-open/close
const vectorResp0 = document.querySelector('.vector-down-resp')
const vectorResp1 = document.querySelector('.vector-up-resp')
const enRespDrop = document.querySelector('.en-resp-drop')
var c;
// En-cont-open/close





function changeLanguage() {
  if (a == 1) {
    vector0.style.display = "none";
    vector1.style.display = "block";
    lang.style.display = "block";
    return a = 0;
  } else {
    vector1.style.display = "none"
    vector0.style.display = "block"
    lang.style.display = "none";
    return a = 1;
  }
}

function burgerOpen() {
  if (b == 1) {
    burgerMenu.style.display = "none";
    return b = 0;
  } else {
    burgerMenu.style.display = "block"
    return b = 1;
  }
}

function enVectDown() {
  if (c == 1) {
    vectorResp0.style.display = "none";
    vectorResp1.style.display = "block";
    enRespDrop.style.display = "block";
    return c = 0;
  } else {
    vectorResp0.style.display = "block";
    vectorResp1.style.display = "none";
    enRespDrop.style.display = "none";
    return c = 1;
  }
}