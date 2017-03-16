var soundCloud = require('soundcloud-node-api')('a513ea843cd798d72b39eeb91cad08a1');
var fs = require('fs');

soundCloud.user.getUserPlaylists('voyeurmusic', function (err, playlists) {

  var albums = playlists.filter(function(elt){ return elt.playlist_type == 'ep' })

  var json = JSON.stringify(albums)
  fs.writeFile('json/albums.json', json, 'utf8', function(){})

})
