import Player from '@vimeo/player';
const player = new Player('handstick', {
  id: 'vimeo-player',
  width: 640,
});

//  require(['https://player.vimeo.com/video/236203659'], function (Player) {
//         const iframe = document.querySelector('iframe');
//         const player = new Player(iframe);

// const options = {
//   id: 'vimeo-player',
//   width: 640,
//   loop: true,
// };
// const player = new Vimeo.Player('made-in-ny', options);

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// const handstickPlayer = new Vimeo.Player('handstick');
// handstickPlayer.on('play', function () {
//   console.log('played the handstick video!');
// });
