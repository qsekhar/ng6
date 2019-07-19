import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  gemmyJokes(){
    return this.http.get('http://api.icndb.com/jokes/random')
  }
}
