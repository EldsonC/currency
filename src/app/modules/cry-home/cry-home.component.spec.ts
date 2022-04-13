import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryHomeComponent } from './cry-home.component';

describe('CryHomeComponent', () => {
  let component: CryHomeComponent;
  let fixture: ComponentFixture<CryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
