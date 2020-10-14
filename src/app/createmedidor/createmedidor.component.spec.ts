import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemedidorComponent } from './createmedidor.component';

describe('CreatemedidorComponent', () => {
  let component: CreatemedidorComponent;
  let fixture: ComponentFixture<CreatemedidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemedidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemedidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
