import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISongsObj, SongDetails } from '../music-details';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit, AfterViewChecked {

  @Input() public songs: Array<SongDetails> = [];
  @Input() showDeleteLink = false;
  @Input() showAddLink = false;
  @Input() songsObj: ISongsObj = {};
  @Output() addSong = new EventEmitter();
  @Output() deleteSong = new EventEmitter();
  tempSongList = [];

  constructor(
    public cd: ChangeDetectorRef
  ) { }


  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.setTempSongs();
  }

  setTempSongs(): void {
    this.tempSongList = this.songs.slice(0, 50);
  }

  lazyLoading(event): void {
    const previousListLength = this.tempSongList.length;
    if (Math.ceil(event.target.offsetHeight + event.target.scrollTop) >= Math.ceil(event.target.scrollHeight)) {
      this.tempSongList = [...this.tempSongList, ...this.songs.slice(previousListLength, previousListLength + 50)];
    }
  }

  addSongToList(song): void {
    this.addSong.emit(song);
  }

  deleteSongFromList(index): void {
    this.deleteSong.emit(index);
  }

}
