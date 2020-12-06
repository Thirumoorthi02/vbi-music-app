import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistAddSongsComponent } from './playlist-add-songs.component';

describe('PlaylistAddSongsComponent', () => {
  let component: PlaylistAddSongsComponent;
  let fixture: ComponentFixture<PlaylistAddSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistAddSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistAddSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
