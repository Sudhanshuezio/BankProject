import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { LoanComponent } from './services/loan/loan.component';
import { DepositComponent } from './services/deposit/deposit.component';
import { CardComponent } from './services/card/card.component';
import { HomelComponent } from './services/loan/homel/homel.component';
import { PersonalComponent } from './services/loan/personal/personal.component';
import { CarComponent } from './services/loan/car/car.component';
import { EducationComponent } from './services/loan/education/education.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestService } from './rest.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ServicesComponent,
    LoanComponent,
    DepositComponent,
    CardComponent,
    HomelComponent,
    PersonalComponent,
    CarComponent,
    EducationComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
