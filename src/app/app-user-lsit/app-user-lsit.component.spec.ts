import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserLsitComponent } from './app-user-lsit.component';

describe('AppUserLsitComponent', () => {
  let component: AppUserLsitComponent;
  let fixture: ComponentFixture<AppUserLsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserLsitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserLsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
