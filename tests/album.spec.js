//getAlbum : retorna um album
//getAlbumTracks
import {getAlbum, getAlbumTracks, getAlbums} from '../src/album';
import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import sinon from 'sinon';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch =  require('node-fetch');

describe('Album', () => {
  let fetchStub;
  let promise;
  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch');
    promise = fetchStub.returnsPromise();
  });
  afterEach(() => {
    fetchStub.restore();
  });

  describe('smoke tests', () => {
    it('should have a function getAlbum', () => {
      expect(getAlbum).to.exist;
    });
    it('should have a function getAlbumTracks', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should called a fetch function', () => {
      const album = getAlbum();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should called a correct URL', () => {
      const album = getAlbum("4aawyAB9vmqN3uQ7FjRGTy");
      expect(fetchStub).to.have.been
        .calledWith("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy");

      const album2 = getAlbum("4aawyAB9vmqN3uQ7FjRGTK");
      expect(fetchStub).to.have.been
        .calledWith("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTK");
    });

    it('should return a JSON', () => {
      promise.resolves({body : 'JSON'});
      const album = getAlbum();
      expect(album.resolveValue).to.be.eql({body : 'JSON'});
    });

  });

  describe('getAlbums', () => {
    it('should have called a fetch method', () => {
      const albums = getAlbums('382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc');
      expect(fetchStub).to.have.been.calledOnce;
    })
    it('should called with a correct URL', ()=> {
      const albums =  getAlbums('382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc');
      expect(fetchStub).to.have.been
        .calledWith("https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc");
    });
    it('should a return JSON', () => {
      promise.resolves({body : 'JSON'});
      const albums = getAlbums();
      expect(albums.resolveValue).to.be.eql({body : 'JSON'});
    });
  });

  describe('getAlbumTracks', () => {
    it('should called a fetch method', () => {
      const albumTrack = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchStub).to.have.been.calledOnce;
    })
    it('should called correct URL', () => {
      const albumTrack = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchStub).to.have.been
        .calledWith("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks");

      getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTJ');
      expect(fetchStub).to.have.been
        .calledWith("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTJ/tracks")
    });

    it('should return a JSON', () => {
      promise.resolves({body : 'JSON'});
      const albumTrack = getAlbumTracks();
      expect(albumTrack.resolveValue).to.be.eql({body: 'JSON'})
    });
  })

});
