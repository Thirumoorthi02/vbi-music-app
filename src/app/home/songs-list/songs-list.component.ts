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

  /**
   * Function to temp songs needed to populte songs in the list
   */
  setTempSongs(): void {
    this.tempSongList = this.songs.slice(0, 50);
  }

  /**
   * Function for lazy loading for performance enhancement
   */
  lazyLoading(event): void {
    const previousListLength = this.tempSongList.length;
    if (Math.ceil(event.target.offsetHeight + event.target.scrollTop) >= Math.ceil(event.target.scrollHeight)) {
      this.tempSongList = [...this.tempSongList, ...this.songs.slice(previousListLength, previousListLength + 50)];
    }
  }


  /**
   * Function to emit selected song to add to the playlist
   * @param song - selected song
   */
  addSongToList(song): void {
    this.addSong.emit(song);
  }


  /**
   * Function to emit selected song to delete from the playlist
   * @param song - selected song
   */
  deleteSongFromList(index): void {
    this.deleteSong.emit(index);
  }

}
