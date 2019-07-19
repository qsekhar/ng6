import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsIndexComponent } from './about-us-index/about-us-index.component';

import { HttpClientModule } from '@angular/common/http'
import { ApiService } from '../services/api.service';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    HttpClientModule
  ],
  declarations: [AboutUsIndexComponent],
  providers: [ApiService]
})
export class AboutUsModule { }
