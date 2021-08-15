import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModafinilListComponent } from './modafinil-list.component';

describe('ModafinilListComponent', () => {
  let component: ModafinilListComponent;
  let fixture: ComponentFixture<ModafinilListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModafinilListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModafinilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
