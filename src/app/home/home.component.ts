import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Constants } from '../constants/constants';
import { SharedDataService } from '../shared-service/shared-data.service';
import { PlayListDetails, SongDetails } from './music-details';
import { MusicService } from './music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MusicService]
})
export class HomeComponent implements OnInit, AfterViewChecked {
  public tabId = 1;

  constructor(
    public sharedDataService: SharedDataService,
    public musicService: MusicService,
    public router: Router,
    public cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.populateSongs();
  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  /**
   * Function to populate Songs
   */
  public populateSongs(): void {
    // this.setValuesFromSession();
    // const songsList = sessionStorage.getItem('songsList');
    // if (songsList) {
    //   (JSON.parse(songsList) || []).forEach(song => {
    //     this.sharedDataService.songs.push(new SongDetails(song));
    //   });
    //   if (window.location.pathname === '') {
    //     this.tabChanged(this.tabId, true);
    //   }
    //   return;
    // }
    forkJoin({
      users: this.musicService.getUserList(),
      albums: this.musicService.getAlbumsList(),
      songs: this.musicService.getSongsList()
    }).subscribe(({ users, albums, songs }) => {
      const userObj: { [key: string]: string } = {};
      const albumObj: { [key: string]: { artist: string, albumName: string } } = {};
      (users || []).forEach(user => {
        userObj[user.id] = user.name;
      });
      (albums || []).forEach(album => {
        albumObj[album.id] = { artist: userObj[album.userId], albumName: album.title };
      });
      (songs || []).forEach(song => {
        this.sharedDataService.songs.push(new SongDetails(song, albumObj[song.albumId]));
      });
      sessionStorage.setItem('songsList', JSON.stringify(this.sharedDataService.songs));
      this.tabChanged(1, true);
    });
  }

  /**
   * Function to populate Values from session storage
   */
  public setValuesFromSession(): void {
    const tabId = sessionStorage.getItem('tabId');
    const playlists = sessionStorage.getItem('playlists');
    const selectedPlaylist = sessionStorage.getItem('selectedPlaylist');
    if (playlists) {
      (JSON.parse(playlists) || []).forEach(playlist => {
        this.sharedDataService.playlists.push(new PlayListDetails(playlist));
      });
    }
    if (selectedPlaylist) {
      this.sharedDataService.selectedPlaylist = new PlayListDetails(JSON.parse(playlists));
    }
    if (tabId) {
      this.tabId = Number(tabId) || 1;
    }

  }

  /**
   * Function triggered on tapping the tab
   */
  public tabChanged(id, onLoad = false): void {
    sessionStorage.setItem('tabId', String(this.tabId));
    if ((id !== this.tabId || onLoad) && this.sharedDataService.songs.length) {
      this.tabId = id;
      if (id === 1) {
        this.router.navigate([Constants.ROUTES.allSongs]);
      } else if (id === 2) {
        this.router.navigate([Constants.ROUTES.playlist]);
      }
    }
  }

}
