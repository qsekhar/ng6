import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsIndexComponent } from './about-us-index/about-us-index.component';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  declarations: [AboutUsIndexComponent]
})
export class AboutUsModule { }
