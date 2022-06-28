/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Text.js
class Text {
  requestGeo() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.addTextMessage(pos);
      }, () => {
        this.showModal();
      });
    } else {
      this.showModal();
    }
  }

  addTextMessage(pos) {
    const li = document.createElement('li');
    li.classList.add('timeline__item');
    li.innerHTML = `<p class="timeline__text">${this.timeline.timelineInput.value}</p class="timeline__geo"><p>${pos.coords.latitude}, ${pos.coords.longitude}</p>`;
    this.timeline.timelineInput.value = '';
    this.timeline.addMessage(li);
  }

  showModal() {
    this.modal = document.createElement('div');
    this.modal.classList.add('text-modal');
    this.modal.innerHTML = `<div class="text-modal__area">
        <h4 class="text-modal__title">Что-то пошло не так.</h4>
        <p class="text-modal__text">К сожалению, нам не удалось определить ваше местоположение, пожалуйста дайте разрешение на использование геолокации, либо введите координаты вручную.</p>
        <form class="text-modal__form">
            <label for="text-modal__input">Широта и долгота, через запятую:</label>
            <input type="text" name="text-modal__input" class="text-modal__input" placeholder="56,6565, 36,1233">
            <div class="text-modal__area-button">
            <button class="text-modal__button text-modal__button_cancel">Отмена</button>
            <button class="text-modal__button text-modal__button_ok" type="submit">ОК</button>
            </div>
        </form>
        </div>`;
    document.body.append(this.modal);
    this.modalInput = document.querySelector('.text-modal__input');
    document.querySelector('.text-modal__button_cancel').addEventListener('click', evt => {
      evt.preventDefault();
      this.modalInput.value = '';
      this.modal.remove();
    });
    document.querySelector('.text-modal__form').addEventListener('submit', evt => {
      evt.preventDefault();
      const li = document.createElement('li');
      li.classList.add('timeline__item');
      li.innerHTML = `<p class="timeline__text">${this.timeline.timelineInput.value}</p class="timeline__geo"><p>${this.modalInput.value}</p>`;
      this.timeline.timelineInput.value = '';
      this.modal.remove();
      this.timeline.addMessage(li);
    });
  }

}
;// CONCATENATED MODULE: ./src/js/Timeline.js
class Timeline {
  constructor(areaForTimeline, objText) {
    this.objText = objText;
    this.areaForTimeline = document.querySelector(`.${areaForTimeline}`);
    this.render();
  }

  render() {
    this.timeline = document.createElement('div');
    this.timeline.classList.add('timeline');
    this.timeline.innerHTML = `
        <ul class="timeline__list">
            <li class="timeline__item"></li>
        </ul>
        <form action="" class="timeline__form">
            <input type="text" class="timeline__input">
        </form>
        `;
    this.areaForTimeline.append(this.timeline);
    this.timelineList = document.querySelector('.timeline__list');
    this.timelineForm = document.querySelector('.timeline__form');
    this.timelineInput = document.querySelector('.timeline__input');
    this.timelineForm.addEventListener('submit', evt => {
      evt.preventDefault();

      if (this.timelineInput.value.length > 2) {
        this.objText.requestGeo();
      }
    });
  }

  addMessage(message) {
    this.timelineList.append(message);
    this.timelineList.scrollTop = this.timelineList.scrollHeight - this.timelineList.clientHeight;
  }

}
;// CONCATENATED MODULE: ./src/js/app.js


const objText = new Text();
const timeline = new Timeline('timeline-area', objText);
objText.timeline = timeline;
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;