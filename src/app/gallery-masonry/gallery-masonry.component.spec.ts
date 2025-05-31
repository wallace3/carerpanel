import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMasonryComponent } from './gallery-masonry.component';

describe('GalleryMasonryComponent', () => {
  let component: GalleryMasonryComponent;
  let fixture: ComponentFixture<GalleryMasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryMasonryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
