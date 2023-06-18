import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SppinerComponent } from './sppiner/sppiner.component';



@NgModule({
  declarations: [
    SppinerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SppinerComponent
  ]
})
export class SharedModule { }
