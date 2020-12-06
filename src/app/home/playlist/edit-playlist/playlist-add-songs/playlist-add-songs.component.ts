import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants/constants';
import { ISongsObj } from 'src/app/home/music-details';
import { SharedDataService } from 'src/app/shared-service/shared-data.service';

@Component({
  selector: 'app-playlist-add-songs',
  templateUrl: './playlist-add-songs.component.html',
  styleUrls: ['./playlist-add-songs.component.scss']
})
export class PlaylistAddSongsComponent implements OnInit {

  public songsObj: ISongsObj = {};

  constructor(
    public sharedDataService: SharedDataService,
    public router: Router
  ) { }

  ngOnInit(): void {
    (this.sharedDataService.selectedPlaylist.songs || []).forEach(song => this.songsObj[song.id] = song);
  }

  /**
   * Function to add song to the playlist
   */
  addSongToPlaylist(song: any = {}): void {
    if (song.id) {
      this.songsObj[song.id] = song;
      this.sharedDataService.selectedPlaylist.songs.push(song);
      sessionStorage.setItem('selectedPlaylist', JSON.stringify(this.sharedDataService.selectedPlaylist));
    }
  }

  /**
   * Function togo back to the previous screen
   */
  back(): void {
    this.router.navigate([Constants.ROUTES.playlist, Constants.ROUTES.editPlaylist]);
  }

}
