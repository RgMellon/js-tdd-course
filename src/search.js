import { toJSON } from './utils';
import { API_URL, HEADERS } from './config';

export const search = (query, type) =>
  fetch(`${ API_URL }/search?q=${query}&type=${type}`, HEADERS).then(toJSON);

export const searchAlbuns = (query) => search(query, 'album')

export const searchTracks = (query) => search(query, 'track');

export const searchPlaylists = (query) =>  search(query, 'playlist');

export const searchArtists = (query) => search(query, 'artist');
