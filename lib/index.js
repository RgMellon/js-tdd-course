'use strict';

var _album = require('./album');

var _search = require('./search');

module.exports = {
  getAlbum: _album.getAlbum, getAlbumTracks: _album.getAlbumTracks, getAlbums: _album.getAlbums,
  search: _search.search, searchAlbuns: _search.searchAlbuns, searchTracks: _search.searchTracks,
  searchPlaylists: _search.searchPlaylists, searchArtists: _search.searchArtists
};