import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanetasSistemaSolarComponent } from './planetas-sistema-solar.component';

describe('PlanetasSistemaSolarComponent', () => {
  let component: PlanetasSistemaSolarComponent;
  let fixture: ComponentFixture<PlanetasSistemaSolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetasSistemaSolarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanetasSistemaSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
