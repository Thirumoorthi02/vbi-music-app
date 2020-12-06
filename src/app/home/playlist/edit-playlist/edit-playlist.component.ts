import { AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared-service/shared-data.service';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.scss']
})
export class EditPlaylistComponent implements AfterViewChecked, OnDestroy {

  constructor(
    public sharedDataService: SharedDataService,
    public cd: ChangeDetectorRef
  ) {
    this.sharedDataService.showBackOption = true;
   }

  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  ngOnDestroy():void {
    this.sharedDataService.showBackOption = false;
  }

}
