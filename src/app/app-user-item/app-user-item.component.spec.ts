import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserItemComponent } from './app-user-item.component';

describe('AppUserItemComponent', () => {
  let component: AppUserItemComponent;
  let fixture: ComponentFixture<AppUserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
