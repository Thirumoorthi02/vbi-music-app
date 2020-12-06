import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared-service/shared-data.service';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.scss']
})
export class EditPlaylistComponent implements AfterViewChecked {

  constructor(
    public sharedDataService: SharedDataService,
    public cd: ChangeDetectorRef
  ) { }

  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

}
