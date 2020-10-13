import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasAplicadasComponent } from './ofertas-aplicadas.component';

describe('OfertasAplicadasComponent', () => {
  let component: OfertasAplicadasComponent;
  let fixture: ComponentFixture<OfertasAplicadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasAplicadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasAplicadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
