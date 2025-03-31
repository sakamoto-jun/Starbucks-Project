// YOUTUBE VIDEO
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: 1,
      loop: 1,
      mute:1, // 실제 옵션 값은 없지만, 작동은 가능 -> 자동재생을 위한 브라우저 속이기 용
      playlist: 'An6LvWQuj_8'
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      }
    }
  });
}