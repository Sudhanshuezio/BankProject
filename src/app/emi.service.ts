import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmiService {

  constructor() { }

  calculate(p,r,t) : number
  {
    return p * r * t;
  }
}
