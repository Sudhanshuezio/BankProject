import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url:string = "http://localhost:3000/customers/";

  constructor(private http:Http) { }

  getUser(id) : Observable<any>
  {
    return this.http.get(this.url+id)
    .map((response:any)=>response)
    
  }

  postUser(myForm)
  {
    return this.http.post(this.url, myForm)
    .map((response: any)=>response)
  }
}
