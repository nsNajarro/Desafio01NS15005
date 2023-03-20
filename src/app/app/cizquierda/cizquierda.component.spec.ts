import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CizquierdaComponent } from './cizquierda.component';

describe('CizquierdaComponent', () => {
  let component: CizquierdaComponent;
  let fixture: ComponentFixture<CizquierdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CizquierdaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CizquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
