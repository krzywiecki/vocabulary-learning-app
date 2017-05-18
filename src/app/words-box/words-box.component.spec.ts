import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsBoxComponent } from './words-box.component';

describe('WordsBoxComponent', () => {
  let component: WordsBoxComponent;
  let fixture: ComponentFixture<WordsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
