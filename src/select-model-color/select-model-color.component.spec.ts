import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectModelColorComponent } from './select-model-color.component';

describe('SelectModelColorComponent', () => {
  let component: SelectModelColorComponent;
  let fixture: ComponentFixture<SelectModelColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectModelColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectModelColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
