import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaPagePage } from './pizza-page.page';
import { IngredientService } from 'src/app/services/ingredient.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailPizzaPage', () => {
  let component: PizzaPagePage;
  let fixture: ComponentFixture<PizzaPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaPagePage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
      providers: [IngredientService]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
