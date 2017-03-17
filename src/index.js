var SoundCloudAudio = require('soundcloud-audio');
var scPlayer = new SoundCloudAudio('a513ea843cd798d72b39eeb91cad08a1');
var Hammer = require('hammerjs')

if (document.querySelector('.player') != null) {
    var url = document.querySelector('.btn-primary.soundcloud').href

    // elts
    var btnPlayPause = document.querySelector('.btn-playpause')
    var btnTrackCollection = document.querySelectorAll('.ep-track')
    var btnTrackArr = []; for(var i = btnTrackCollection.length; i--; btnTrackArr.unshift(btnTrackCollection[i]));

    // state
    var activeTrack = 0
    var isPlaying = 0

    var playPause = function(ev) {
        if( isPlaying ){
            scPlayer.pause()
        }
        else {
            scPlayer.play({playlistIndex: activeTrack})
            btnTrackArr[activeTrack].classList.add('active')
        }

        isPlaying = !isPlaying

        btnPlayPause.classList.toggle('paused')
        btnPlayPause.classList.toggle('playing')
    }

    var skipTrack = function(ev){
        scPlayer.play({playlistIndex: activeTrack})

        btnTrackArr.forEach(function(element){ element.classList.remove('active') })
        btnTrackArr[activeTrack].classList.add('active')

        btnPlayPause.classList.remove('paused')
        btnPlayPause.classList.add('playing')
        isPlaying = 1
    }


    scPlayer.resolve(url, function (playlist) {
        // bind play-pause
        var mc = new Hammer(btnPlayPause)
        mc.on("tap press", playPause)

        // bind track-list
        btnTrackArr.forEach(function(element, index){
            var mc = new Hammer(element)
            mc.on("tap press", function(ev){
                activeTrack = index
                skipTrack(ev)
            })
        })

        // bind end-track / play-all
        scPlayer.on('ended', function() { scPlayer.next() })

        // display play-pause
        btnPlayPause.style.opacity = 1
    });
}
