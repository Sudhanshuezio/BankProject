import { Component, OnInit } from '@angular/core';
import { EmiService } from 'src/app/emi.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-homel',
  templateUrl: './homel.component.html',
  styleUrls: ['./homel.component.css']
})
export class HomelComponent implements OnInit {

  EMI: number;
  rate : number = 10.5;
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
