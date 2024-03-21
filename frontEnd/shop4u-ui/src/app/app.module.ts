import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { SliderProductCardComponent } from './home/slider-product-card/slider-product-card.component';
import { ProductCardSliderComponent } from './home/product-card-slider/product-card-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoAngularMaterailModule } from './DemoAngularMaterialModule';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCarouselComponent,
    SliderProductCardComponent,
    ProductCardSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoAngularMaterailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
