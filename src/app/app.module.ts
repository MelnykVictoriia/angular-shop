import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponentComponent } from './product-image-component/product-image-component.component';
import { ProductDesriptionComponent } from './product-desription/product-desription.component';
import { PriceComponent } from './price/price.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponentComponent,
    ProductDesriptionComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
