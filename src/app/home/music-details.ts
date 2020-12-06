export class SongDetails {
    public playTime = '4:12';
    public artist = '';
    public songName = '';
    public albumName = '';
    public thumbnailUrl = '';
    public id = 0;

    constructor(song: any = {}, albumObj: any = {}) {
        this.albumName = song.albumName || albumObj.albumName || '';
        this.artist = song.artist || albumObj.artist || '';
        this.songName = song.songName || song.title || '';
        this.thumbnailUrl = song.thumbnailUrl || '';
        this.id = Number(song.id) || 0;
    }
}

export class PlayListDetails {
    public createdDate = '';
    public songs: SongDetails[];
    public playlistName = '';

    constructor(playlist: any = {}, count = 1) {
        if (playlist.createdDate) {
            this.createdDate = new Date(playlist.createdDate).toDateString();
        } else {
            this.createdDate = new Date().toDateString();
        }
        this.songs = [];
        this.songs = (playlist.songs || []).map(song => new SongDetails(song));
        this.playlistName = playlist.playlistName || `Playlist ${count}`;
    }
}

export interface ISongsObj {
    [key: string]: SongDetails;
}
