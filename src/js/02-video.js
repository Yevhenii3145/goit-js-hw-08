import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

targetTime();

function setTimeToLocale(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  //   console.log('1234521435');
}

player.on('timeupdate', throttle(setTimeToLocale, 1000));

function targetTime(e) {
  const time = localStorage.getItem('videoplayer-current-time');
  if (time) {
    player.setCurrentTime(time);
  }
}
