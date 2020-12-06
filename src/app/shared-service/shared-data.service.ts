import { Injectable } from '@angular/core';
import { PlayListDetails, SongDetails } from '../home/music-details';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public songs: Array<SongDetails> = [];
  public playlists: Array<PlayListDetails> = [];
  public selectedPlaylist: PlayListDetails;
  public showBackOption = false;

  constructor() { }
}
