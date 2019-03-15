import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        id: new FormControl("",Validators.required),
        fname: new FormControl("", Validators.required),
        lname: new FormControl("", Validators.required),
        dob: new FormControl("", Validators.required),
        gender: new FormControl("",Validators.required),
        fathername: new FormControl("", Validators.required),
        address: new FormControl("", Validators.required),
        email: new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern('^(\\w)+(\@)(\\w)+(\.)(\\w)+$')
        ])),
        un: new FormControl(""),
        pass1: new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(32)
        ])),
        pass2: new FormControl("",Validators.required)
      },(formGroup : FormGroup)=>{
        return this.checkPassword(formGroup);
      });
  }

  checkPassword(form : FormGroup) : {[key : string]:boolean}|null
  {
    let pass = form.controls.pass1.value==null?" ":form.controls.pass1.value;
    let cpass = form.controls.pass2.value==null?" ":form.controls.pass2.value;

    return (pass == cpass ? null : {"pass2":false});
  }

  onSubmit(myForm) {
    console.log(myForm);
    console.log(myForm.id);
    console.log(myForm.fname);
    console.log(myForm.lname);
    console.log(myForm.dob);
    console.log(myForm.gender);
    console.log(myForm.fathername);
    console.log(myForm.address);
    console.log(myForm.email);
    console.log(myForm.un);
    console.log(myForm.pass1);
    console.log(myForm.pass2);
  }

  postItem(obj) 
  {
    this.restService.postUser(obj)
    .subscribe(
      (response: any)=>console.log('Put Successfully')
    )
  }

}
