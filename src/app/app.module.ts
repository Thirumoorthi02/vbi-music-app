import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SongsListComponent } from './home/songs-list/songs-list.component';
import { AllSongsComponent } from './home/all-songs/all-songs.component';
import { PlaylistComponent } from './home/playlist/playlist.component';
import { FormsModule } from '@angular/forms';
import { EditPlaylistComponent } from './home/playlist/edit-playlist/edit-playlist.component';
import { PlaylistHomeComponent } from './home/playlist/playlist-home/playlist-home.component';
import { EditPlaylistHomeComponent } from './home/playlist/edit-playlist/edit-playlist-home/edit-playlist-home.component';
import { PlaylistAddSongsComponent } from './home/playlist/edit-playlist/playlist-add-songs/playlist-add-songs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongsListComponent,
    AllSongsComponent,
    PlaylistComponent,
    EditPlaylistComponent,
    PlaylistHomeComponent,
    EditPlaylistHomeComponent,
    PlaylistAddSongsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
