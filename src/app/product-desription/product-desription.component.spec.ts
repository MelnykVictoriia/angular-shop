import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDesriptionComponent } from './product-desription.component';

describe('ProductDesriptionComponent', () => {
  let component: ProductDesriptionComponent;
  let fixture: ComponentFixture<ProductDesriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDesriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDesriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
