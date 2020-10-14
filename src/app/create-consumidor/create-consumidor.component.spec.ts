import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConsumidorComponent } from './create-consumidor.component';

describe('CreateConsumidorComponent', () => {
  let component: CreateConsumidorComponent;
  let fixture: ComponentFixture<CreateConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConsumidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
