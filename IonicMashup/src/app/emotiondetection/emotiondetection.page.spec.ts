import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotiondetectionPage } from './emotiondetection.page';

describe('EmotiondetectionPage', () => {
  let component: EmotiondetectionPage;
  let fixture: ComponentFixture<EmotiondetectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotiondetectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotiondetectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
