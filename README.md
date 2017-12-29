# Spotify Wrapper

A wrapper to work with the [Spotify Web Api] (https://developer.spotify.com/web-api/)

##Dependencies
  this library depends on [fetch](https://fetch.spec.whatwg.org/)
  to make requests to the Spotify Web API. for enviroments that dont
  support fetch, you'll need to provide a [polifyl] (https://github.com/fetch) to browser or [polifyl](https://github.com/bitinn/node-fetch) to Node.

## Installation
  ```sh
    $ npm install spotify-wrapper --save
  ```

## How to use
  ```js
    //import a specific method
    import { method } from 'spotify-wrapper';

    //import all method
    import * as spotifyWrapper from 'spotify-wrapper';
  ```
## CommonJS
  ```js
    var spotify = require('spotify-wrapper');
  ```

## UMD in Browser

  ```html
    <!-- to import non-minified version -->
    <script src="spotify-wrapper.umd.js"></script>
    <!-- to import minified version -->
    <script src="spotify-wrapper.umd.min.js"> </script>
  ```

  After that the library will be available to the Global as
  `spotifyWrapper`.
  follow a exemple:
  ```js
    const albums = spotifyWrapper.searchAlbums('Chosen artist');
  ```

## Methods
  follow the methods that the library provides;
### search(query, types)
  search for information about artist, albums, tracks of playlist.
  [Test in Spotify Web Console] (https://developer.spotify.com/web-api/console/get-search-item/).

  **Arguments**

  Argument | type               |     options
  `query`  | *string*           | 'Any search query'
  `type`   | *Array of strings* | ['artist', 'album', 'track', 'playlist']

  ***Example**
    ```js
    search('Muse', ['artist, 'album'])
      .then(data => {
          //do what you want with the data
      })
    ```
## searcAlbums(query)
  search for informations about Albums with provide query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-albums/) with type defined as *album*

  **Arguments**

  Argument | type               |     options
  `query`  | *string*           | 'Any search query'

  **Example**
    ```js
      searchAlbums('Muse')
        .then(data => data {
          //do what you want with the data
        })
    ```
## searchArtists(query)
   search for informations about Artists with provide query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *artist*

   **Arguments**
   Argument | type               |     options
   `query`  | *string*           | 'Any search query'

  **Example**
     ```js
      searchAlbums('Muse')
        .then(data => data {
          //do what you want with the data
        })
    ```
## searchTrakcs(query)
  search for informations about Tracks with provide query. Test in [Spotify Web Console] (https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *track*

   **Arguments**
   Argument | type               |     options
   `query`  | *string*           | 'Any search query'

  **Example**
     ```js
      searchAlbums('Pretender')
        .then(data => data {
          //do what you want with the data
        })
    ```

## searchPlayLists(query)
  search information about Playlist with provide query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) whit type defined as *playlist*

   **Arguments**
   Argument | type               |     options
   `query`  | *string*           | 'Any search query'

  **Example**
     ```js
      searchAlbums('Run berg')
        .then(data => data {
          //do what you want with the data
        })
    ```

## getAlbum(id)
  Search for informations about a specific Album with provided id
  Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album/)



  **Example**
     ```js
      getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
        .then(data => data {
          //do what you want with the data
        })
    ```


## getAlbums(id)
  Search for informations about some Albums whit all id's Test in
  [Spotify Web Console] (https://developer.spotify.com/web-api/console/get-artist-albums/)

  **Arguments**

  Argument | type                    |     options
  `ids`    | *Array of string*       |    ['id', 'id2']

  **Example**
    ```js
      getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '893reAB9vmqN3uQ7FjRGTy'])
        .then(data => data {
          //do what you want with the data
        })
    ```

## getAlbumTracks(id)
  Get Albums Tracks with  provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album-tracks/)

  **Arguments**

  Argument | type           |     options
  `ids`    | *String*       |    id

  **Example**
    ```js
      getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy')
        .then(data => data {
          //do what you want with the data
        })
    ```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

**Renan Melo** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
