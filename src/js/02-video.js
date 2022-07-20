import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

targetTime();

player.on('timeupdate', throttle(setTimeToLocale, 1000));

function setTimeToLocale(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  console.log('Работает))');
}

function targetTime() {
  const time = localStorage.getItem('videoplayer-current-time');
  if (time) {
    player.setCurrentTime(time);
  }
}
