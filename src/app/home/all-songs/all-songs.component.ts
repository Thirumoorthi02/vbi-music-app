import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SharedDataService } from 'src/app/shared-service/shared-data.service';
import { SongDetails } from '../music-details';

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.scss']
})
export class AllSongsComponent implements OnInit, AfterViewChecked {

  searchText = '';
  @Input() songs: Array<SongDetails> = this.sharedDataService.songs;
  @Input() showAddLink = false;
  @Input() songsObj = false;
  @Output() addSong = new EventEmitter();
  tempSongList = [];

  constructor(
    public sharedDataService: SharedDataService,
    public cd: ChangeDetectorRef
  ) { }

  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.tempSongList = this.songs;
  }

  filterSongs(searchText): void {
    if (searchText) {
      this.tempSongList = [];
      this.songs.forEach(song => {
        if (song.songName.includes(searchText)) {
          this.tempSongList.push(song);
        }
      });
    } else {
      this.tempSongList = this.songs;
    }
  }

  addSongToList(song): void {
    this.addSong.emit(song);
  }

}
