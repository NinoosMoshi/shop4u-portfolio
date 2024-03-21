import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarContentComponent } from './components/navbar/navbar-content/navbar-content.component';
import { DemoAngularMaterailModule } from 'src/app/DemoAngularMaterialModule';



@NgModule({
  declarations: [

    NavbarComponent,
       NavbarContentComponent
  ],
  imports: [
    CommonModule,
    DemoAngularMaterailModule
  ]
})
export class SharedModule { }
