import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTweetComponent } from './last-tweet.component';

describe('LastTweetComponent', () => {
  let component: LastTweetComponent;
  let fixture: ComponentFixture<LastTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
