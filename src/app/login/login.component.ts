import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;


  errorMsg = null;
  constructor(private restService : RestService, private router: Router) { }


  ngOnInit() {
    this.form = new FormGroup( {
      id: new FormControl(""),
    pass1: new  FormControl("")
    });
  }

  onSubmit(myForm) {
    let id = myForm['id'];
    let pass = myForm['pass1'];
    this.restService.getUser(id)
    .subscribe((response: any)=> {
      if(pass == response.json()['pass1'])
      {
        this.router.navigate(['services']);
        this.errorMsg = null;
      }
        
      else 
      {
        this.errorMsg="Invalid Password";
      }  
    },
    (error)=>{
      this.errorMsg="Invalid Customer ID";
    }
    )
  }

}
