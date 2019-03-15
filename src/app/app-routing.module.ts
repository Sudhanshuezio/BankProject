import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoanComponent } from './services/loan/loan.component';
import { CarComponent } from './services/loan/car/car.component';
import { DepositComponent } from './services/deposit/deposit.component';
import { CardComponent } from './services/card/card.component';
import { PersonalComponent } from './services/loan/personal/personal.component';
import { EducationComponent } from './services/loan/education/education.component';
import { HomelComponent } from './services/loan/homel/homel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'login' ,
    component: LoginComponent
  },
  {
    path: 'signup' ,
    component: SignupComponent
  },
  {
    path: 'services/loan' ,
    component: LoanComponent
  },
  {
    path: 'services/deposit',
    component: DepositComponent
  },
  {
    path: 'services/card' ,
    component: CardComponent
  },
  {
    path: 'car' ,
    component: CarComponent
  },
  {
    path: 'personal' , 
    component: PersonalComponent
  },
  {
    path: 'home' ,
    component: HomelComponent
  },
  {
    path: 'education' ,
    component: EducationComponent
  },
  {
    path: 'login/signup' ,
    redirectTo: 'signup',pathMatch:'full'
  },
  {
    path: 'signup/login' ,
    redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
