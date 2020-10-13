import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasInteresadasComponent } from './empresas-interesadas.component';

describe('EmpresasInteresadasComponent', () => {
  let component: EmpresasInteresadasComponent;
  let fixture: ComponentFixture<EmpresasInteresadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasInteresadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasInteresadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
