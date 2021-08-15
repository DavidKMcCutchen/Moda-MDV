import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModafinilComponent } from './modafinil.component';

describe('ModafinilComponent', () => {
  let component: ModafinilComponent;
  let fixture: ComponentFixture<ModafinilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModafinilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModafinilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
