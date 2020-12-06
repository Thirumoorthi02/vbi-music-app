import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../constants/constants';

@Injectable()
export class MusicService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Function to get songs list
   */
  public getSongsList(): Observable<any> {
    return this.http.get('./../assets/songs.json');
  }

  /**
   * Function to get all albums list
   */
  public getAlbumsList(): Observable<any> {
    return this.http.get('./../assets/albums.json');
  }

  /**
   * Function to get all albums list
   */
  public getUserList(): Observable<any> {
    return this.http.get('./../assets/users.json');
  }
}
