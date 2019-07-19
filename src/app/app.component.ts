import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isShowbanner: Boolean = true;

  constructor(private router: Router, private location: Location) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isShowbanner = ('' === this.location.path())
      }
    });
  }
}
