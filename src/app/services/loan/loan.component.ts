import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  option: number = 1;

  constructor() { }

  ngOnInit() {
  }

  display(ltype) : void {
    this.option = ltype;
  }

}
