import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModafinilDetailsComponent } from './modafinil-details.component';

describe('ModafinilDetailsComponent', () => {
  let component: ModafinilDetailsComponent;
  let fixture: ComponentFixture<ModafinilDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModafinilDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModafinilDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
