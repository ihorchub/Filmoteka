import { renderCards } from './renderCardsMyLibrary';
import { spiner, spinerRemove, successPagesLib } from '../js/notifications';
import { getPagination } from './pagination';
import { refs } from './refs';

// const watchedBtn = document.querySelector('.js-watched');
// const queuedBtn = document.querySelector('.js-queue');
// watchedBtn.addEventListener('click', onWatchedBtn);
// queuedBtn.addEventListener('click', onQueuedBtn);

const WATCHED = 'movies-watched';
const QUEUE = 'movies-queue';
// Заглушки порожньої сторінки

let curPage = 1;
const libPageSize = 18;

export function onWatchedBtn(page = 0) {
  if (page) curPage = page;

  refs.img.classList.add('is-hidden');
  refs.text.classList.add('is-hidden');

  spiner();
  const obj = JSON.parse(localStorage.getItem(WATCHED));
  if (obj?.length) {
    calcLibSize(obj);
  } else {
    refs.img.classList.remove('is-hidden');
    refs.text.classList.remove('is-hidden');
    spinerRemove();
  }
  // watchedBtn.removeEventListener('click', onWatchedBtn);
}

export function onQueuedBtn(page = 0) {
  if (page) curPage = page;

  refs.img.classList.add('is-hidden');
  refs.text.classList.add('is-hidden');

  spiner();
  const obj = JSON.parse(localStorage.getItem(QUEUE));
  if (obj?.length) {
    calcLibSize(obj);
  } else {
    refs.img.classList.remove('is-hidden');
    refs.text.classList.remove('is-hidden');
    spinerRemove();
  }
  // queuedBtn.removeEventListener('click', onQueuedBtn);
}

function calcLibSize(arr) {
  let lastPage = null;

  if (arr.length <= libPageSize) {
    renderCards(arr);
    spinerRemove();
  }

  // Визначення останньої сторінки
  if (arr.length % libPageSize)
    lastPage = Math.floor(arr.length / libPageSize) + 1;
  else lastPage = arr.length / libPageSize;

  // Рендер відповідної сторінки
  if (curPage === lastPage) {
    renderCards(arr.slice(curPage * libPageSize - libPageSize, arr.length));
    spinerRemove();
  } else {
    renderCards(
      arr.slice(curPage * libPageSize - libPageSize, curPage * libPageSize)
    );
    spinerRemove();
  }
  getPagination(curPage, lastPage, true);
}
