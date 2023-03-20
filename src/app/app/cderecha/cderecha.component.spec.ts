import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CderechaComponent } from './cderecha.component';

describe('CderechaComponent', () => {
  let component: CderechaComponent;
  let fixture: ComponentFixture<CderechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CderechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CderechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
