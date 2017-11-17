import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [CalculadoraComponent]
  ,
  exports:[CalculadoraComponent]
})
export class SharedModule { }
