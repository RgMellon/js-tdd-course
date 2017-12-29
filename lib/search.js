'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchArtists = exports.searchPlaylists = exports.searchTracks = exports.searchAlbuns = exports.search = undefined;

var _utils = require('./utils');

var _config = require('./config');

var search = exports.search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, _config.HEADERS).then(_utils.toJSON);
};

var searchAlbuns = exports.searchAlbuns = function searchAlbuns(query) {
  return search(query, 'album');
};

var searchTracks = exports.searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};