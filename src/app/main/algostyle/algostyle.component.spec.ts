import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgostyleComponent } from './algostyle.component';

describe('AlgostyleComponent', () => {
  let component: AlgostyleComponent;
  let fixture: ComponentFixture<AlgostyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgostyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgostyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
