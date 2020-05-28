import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaPagePage } from './pizza-page.page';

describe('PizzaPagePage', () => {
  let component: PizzaPagePage;
  let fixture: ComponentFixture<PizzaPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
