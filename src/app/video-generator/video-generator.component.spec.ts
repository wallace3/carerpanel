import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGeneratorComponent } from './video-generator.component';

describe('VideoGeneratorComponent', () => {
  let component: VideoGeneratorComponent;
  let fixture: ComponentFixture<VideoGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
