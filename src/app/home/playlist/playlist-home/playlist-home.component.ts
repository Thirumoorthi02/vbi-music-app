import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants/constants';
import { SharedDataService } from 'src/app/shared-service/shared-data.service';
import { PlayListDetails } from '../../music-details';

@Component({
  selector: 'app-playlist-home',
  templateUrl: './playlist-home.component.html',
  styleUrls: ['./playlist-home.component.scss']
})
export class PlaylistHomeComponent implements AfterViewChecked {

  constructor(
    public sharedDataService: SharedDataService,
    public cd: ChangeDetectorRef,
    public router: Router
  ) { }

  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  /**
   * Function to create playlist
   */
  createPlaylist(): void {
    this.sharedDataService.playlists.push(new PlayListDetails({}, this.sharedDataService.playlists.length + 1));
    sessionStorage.setItem('playlists', JSON.stringify(this.sharedDataService.playlists));
  }

  /**
   * Function to navigate to edit playlist screen
   */
  editPlaylist(playlist): void {
    this.sharedDataService.selectedPlaylist = playlist;
    sessionStorage.setItem('selectedPlaylist', JSON.stringify(playlist));
    this.router.navigate([Constants.ROUTES.playlist, Constants.ROUTES.editPlaylist]);
  }

}
