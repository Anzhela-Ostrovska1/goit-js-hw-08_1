
import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

// initialize
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time'


// define callback
const onPlay = function (data) {
  
    localStorage.setItem(STORAGE_KEY, data.seconds)
}

const savedTime = localStorage.getItem(STORAGE_KEY)
if (savedTime) {
    const currentTime = localStorage.getItem(STORAGE_KEY)
     player.setCurrentTime(currentTime)
 }

// register callback

player.on('timeupdate', throttle(onPlay, 1000));



