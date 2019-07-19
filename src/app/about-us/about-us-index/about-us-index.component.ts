import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about-us-index',
  templateUrl: './about-us-index.component.html',
  styleUrls: ['./about-us-index.component.scss']
})

export class AboutUsIndexComponent implements OnInit {

  theJoke : String = 'Joke is loading'

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.gemmyJokes().subscribe((result : any )  => {
      this.theJoke = result.value.joke
    })
  }

}
