// Варіант 1

import Notiflix from 'notiflix';
// Функції повідомлень (просто імпортуемо туди, де хочемо використати та викликаем);
export function success(totalMovies, query) {
  Notiflix.Notify.success(
    `Hooray we found ${totalMovies} movies for "${query}"`
  );
}

export function failure() {
  Notiflix.Notify.failure('Sorry, no matches found for your search query!');
}
export function missingTrailer() {
  Notiflix.Report.info(
    'Missing Trailer!',
    'Unfortunately the trailer was lost in the vastness of the space',
    'Thanks'
  );
}

export function secondRequest(query) {
  Notiflix.Notify.warning(
    `You are trying to search "${query}" again, please enter a different search query`,
    {
      closeButton: true,
    }
  );
}

export function warning() {
  Notiflix.Notify.warning('Enter your search query in the search bar', {
    closeButton: true
  });
}

export function spiner() {
  Notiflix.Loading.circle({
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  });
}

export function spinerRemove() {
  Notiflix.Loading.remove();
}

export function noInfo() {
  Notiflix.Notify.failure('Info about this movie not found');
}

export function noTrailer() {
  Notiflix.Notify.failure('Trailer not found');
}

// Додати 4 функціїї додано і видалено до черги та переглянутих

export function addToWatchQueue() {
  Notiflix.Notify.info('The movie has been added to the queue');
}

export function removeFromQueue() {
  Notiflix.Notify.info('The movie has been removed from the queue');
}

export function addToWatched() {
  Notiflix.Notify.info('The movie has been added to watched');
}

export function removeFromWatched() {
  Notiflix.Notify.info('The movie has been removed from watched');
}

export function ruAllert() {
  Notiflix.Notify.failure('This film is banned for showing in Ukraine'), {
    timeout:1500
  }
}

export function ruDelete() {
  Notiflix.Report.failure(
    'РУСНЯВЫЙ КОНТЕНТ!',
    'Пожалуйста, подтвердите удаление всей информации с вашего девайса, иначе я запускаю функцию его самоуничтожения',
    'Удалить всю информацию',
    ruRepeatMessage
   );
}

function ruRepeatMessage() {
  Notiflix.Notify.failure('Удаляю весь контент', {
    position: getRandomPositionElement(positions),
    timeout: 500,
  });
  setTimeout(ruRepeatMessage, 500);
}

const positions = ['right-top','right-bottom','left-top','left-bottom','center-top','center-bottom','center-center']

function getRandomPositionElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

