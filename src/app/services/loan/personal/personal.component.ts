import { Component, OnInit } from '@angular/core';
import { EmiService } from 'src/app/emi.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  EMI: number;
  rate : number = 9.5;
  form;

  constructor(private emiCalculate : EmiService) { }

  ngOnInit() {
    this.form = new FormGroup( {
      principalamount: new FormControl(""),
      tenure: new FormControl(""),
      roi: new FormControl("")
    });
  }

  calculate(p,t) : void {
    this.EMI =  this.emiCalculate.calculate(p,this.rate,t);
  }

  onSubmit(myForm) {
    console.log(myForm);
  }
}
