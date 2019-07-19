import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsIndexComponent } from './about-us-index/about-us-index.component';

const routes: Routes = [{
  path: '',
  component: AboutUsIndexComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
