import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarContentComponent } from './components/navbar/navbar-content/navbar-content.component';
import { DemoAngularMaterailModule } from 'src/app/DemoAngularMaterialModule';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [

    NavbarComponent,
       NavbarContentComponent,
       FooterComponent
  ],
  imports: [
    CommonModule,
    DemoAngularMaterailModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
