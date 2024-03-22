import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { ProductCardSliderComponent } from './components/home/product-card-slider/product-card-slider.component';
import { SliderProductCardComponent } from './components/home/slider-product-card/slider-product-card.component';
import { ProductsComponent } from './components/products/products.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainCarouselComponent,
    ProductCardSliderComponent,
    SliderProductCardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    ProductsComponent
  ]
})
export class FeatureModule { }
