var SoundCloudAudio = require('soundcloud-audio');
var scPlayer = new SoundCloudAudio('a513ea843cd798d72b39eeb91cad08a1');
var Hammer = require('hammerjs')



if (document.querySelector('.player') != null) {
    var ep_url = document.querySelector('.btn-primary.soundcloud').href

    scPlayer.resolve(ep_url, function (playlist) {
        console.log(playlist);

        // once playlist is loaded it can be played
        // scPlayer.play();

        // for playlists it's possible to switch to another track in queue
        // e.g. we do it here when playing track is finished
        scPlayer.on('ended', function () {
            scPlayer.next();
        });

        // setTimeout(function(){scPlayer.pause()}, 7777)

        // play specific track from playlist by it's index
        // scPlayer.play({playlistIndex: 2});
    });



    var btnPlayPause = document.querySelector('.btn-playpause')
    var mc = new Hammer(btnPlayPause)
    mc.on("tap press", function(ev) {
        var element = ev.target.parentElement
        var state = ev.target.parentElement.classList.contains('playing') ? 'playing' : 'paused'

        if( state == 'playing' )
            scPlayer.pause()
        else
            scPlayer.play()

        element.classList.toggle('paused')
        element.classList.toggle('playing')
    })

    // btnPlayPause.addEventListener('click', function(){
    //     console.log('btnPlayPause')
    // })
}
