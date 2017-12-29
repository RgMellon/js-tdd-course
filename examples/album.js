global.fetch = require('node-fetch');
import { searchAlbuns } from '../src/search';

const album = searchAlbuns('Muse');
  album.then( data => console.log(data));
