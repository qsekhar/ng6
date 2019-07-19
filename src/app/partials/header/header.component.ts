import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems : Array<{name: String,path : String}> = [
    {
      name: 'World',
      path: ''
    },
    {
      name: 'Technology',
      path: ''
    },
    {
      name: 'Design',
      path: ''
    },
    {
      name: 'Health',
      path: ''
    },
    {
      name: 'About Us',
      path: '/about-us'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
