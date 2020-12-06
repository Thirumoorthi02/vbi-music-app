import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaylistHomeComponent } from './edit-playlist-home.component';

describe('EditPlaylistHomeComponent', () => {
  let component: EditPlaylistHomeComponent;
  let fixture: ComponentFixture<EditPlaylistHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlaylistHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaylistHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
