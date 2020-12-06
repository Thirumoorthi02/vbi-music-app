import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants/constants';
import { SongDetails } from 'src/app/home/music-details';
import { SongsListComponent } from 'src/app/home/songs-list/songs-list.component';
import { SharedDataService } from 'src/app/shared-service/shared-data.service';

@Component({
  selector: 'app-edit-playlist-home',
  templateUrl: './edit-playlist-home.component.html',
  styleUrls: ['./edit-playlist-home.component.scss']
})
export class EditPlaylistHomeComponent implements OnInit, AfterViewChecked {

  public songs: SongDetails[] = [];
  @ViewChild('songsListComponent', { static: false }) public songsListComponent: SongsListComponent;

  constructor(
    public sharedDataService: SharedDataService,
    public router: Router,
    public cd: ChangeDetectorRef
  ) { }

  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.songs = this.sharedDataService.selectedPlaylist.songs;
  }

  addSongs(): void {
    this.router.navigate([Constants.ROUTES.playlist, Constants.ROUTES.editPlaylist, Constants.ROUTES.addSongsPlaylists]);
  }

  deleteSongFromList(index): void {
    this.songs.splice(index, 1);
  }

  back(): void {
    this.router.navigate([Constants.ROUTES.playlist]);
  }

  shuffleSongs(): void {
    let ctr = this.songs.length;
    let temp;
    let index;

    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = this.songs[ctr];
      this.songs[ctr] = this.songs[index];
      this.songs[index] = temp;
    }
    this.songsListComponent.setTempSongs();
  }

}
