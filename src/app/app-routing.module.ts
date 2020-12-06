import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSongsComponent } from './home/all-songs/all-songs.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './home/playlist/playlist.component';
import { Constants } from './constants/constants';
import { PlaylistHomeComponent } from './home/playlist/playlist-home/playlist-home.component';
import { EditPlaylistComponent } from './home/playlist/edit-playlist/edit-playlist.component';
import { EditPlaylistHomeComponent } from './home/playlist/edit-playlist/edit-playlist-home/edit-playlist-home.component';
import { PlaylistAddSongsComponent } from './home/playlist/edit-playlist/playlist-add-songs/playlist-add-songs.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: Constants.ROUTES.allSongs, component: AllSongsComponent },
      {
        path: Constants.ROUTES.playlist, component: PlaylistComponent,
        children: [
          { path: '', component: PlaylistHomeComponent },
          {
            path: Constants.ROUTES.editPlaylist, component: EditPlaylistComponent,
            children: [
              { path: '', component: EditPlaylistHomeComponent },
              { path: Constants.ROUTES.addSongsPlaylists, component: PlaylistAddSongsComponent },
            ]
          }
        ]
      }]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
