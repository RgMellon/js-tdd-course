import chai, { expect } from 'chai';
import { search, searchAlbuns, searchTracks, searchPlaylists, searchArtists } from '../src/search';
import  sinon  from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

global.fetch = require('node-fetch');
chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Search', () => {
  let fetchStub;
  let promise;

  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch');
    promise = fetchStub.returnsPromise();
  });
  afterEach(() => {
    fetchStub.restore();
  });

  describe('smoke test', () => {

    it('Should exists method search', () => {
      expect(search).to.exist;
    })

    it('Should exists method searchAlbuns', () => {
      expect(searchAlbuns).to.exist;
    });

    it('Should exists method searchArtists', () => {
      expect(searchArtists).to.exist;
    });

    it('Should exists method searchTracks', () => {
      expect(searchTracks).to.exist;
    });

    it('Should exists method searchPlaylists', () => {
      expect(searchPlaylists).to.exist;
    });

  });

  describe('Generic search', () => {
    it('Should have called a fetch method', () => {

      const artist = search();
      expect(fetchStub).to.have.been.calledOnce;

    });

    it('should expect exists correct url', () => {
      context('passing one type', () => {
        const artist = search('Muse', 'artist');
        expect(fetchStub).to.have.been
          .calledWith(`https://api.spotify.com/v1/search?q=Muse&type=artist`);

        const albums = search('Muse', 'album');
        expect(fetchStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album')
      });

      context('passing more than on type', () => {
        const artistsAlbums = search('Muse', ['album', 'artist']);
        expect(fetchStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album,artist')
      });
    });

    it('should expect a JSON return', () => {
      promise.resolves({body: 'json'});
      const artist = search('Muse', 'artist');
       expect(artist.resolveValue).to.be.eql({body : 'json'});
    });

  });

  describe('searchArtists', () => {
    it('should have called a fetch ', () => {
      const artist = searchArtists();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call fetch the correct URL', () => {
      const artist = searchArtists('Muse');
      expect(fetchStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist')
    });

    it('should expect a JSON return', () => {
      promise.resolves({body : 'Json'});
      const artist = searchArtists();
      expect(artist.resolveValue).to.be.eql({body : 'Json'});
    });
  });

  describe('searchAlbum', () =>{
    it('should searchAlbuns called a fetch', () => {
      const album = searchAlbuns();
      expect(fetchStub).to.have.been.calledOnce;
    })

    it('should searchAlbum called correct URL', () => {
      const album = searchAlbuns('Muse');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });

    it('should searchAlbum return a JSON', () => {
      promise.resolves({body: 'JSON'});
      const album = searchAlbuns();
      expect(album.resolveValue).to.be.eql({body:'JSON'});
    });
  });

  describe('searchTracks', () => {
    it('should have called a fetch', () => {
      const track = searchTracks();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should expect correct URL', () => {
      const track = searchTracks('Muse');
      expect(fetchStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Muse&type=track");
    });

    it('should expect a retun JSON', () => {
      promise.resolves({body:'Json'});
      const track = searchTracks();
      expect(track.resolveValue).to.be.eql({body:'Json'});
    });
  });

  describe('searchPlaylists', () => {
    it('should have called a fetch', () => {
      const track = searchPlaylists();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should expect correct URL', () => {
      const track = searchPlaylists('Muse');
      expect(fetchStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Muse&type=playlist");
    });

    it('should expect a retun JSON', () => {
      promise.resolves({body:'Json'});
      const track = search();
      expect(track.resolveValue).to.be.eql({body:'Json'});
    });

  });
});
