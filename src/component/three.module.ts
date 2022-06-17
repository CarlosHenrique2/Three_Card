import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreecardComponent } from './threecard/threecard.component';

@NgModule({
  declarations: [ThreecardComponent],
  imports: [CommonModule],
  exports: [ThreecardComponent],
})
export class ThreeModule {}
