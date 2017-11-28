import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ProjectComponent } from './project/project.component';
import { ResultComponent } from './result/result.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './users/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGaurd } from './users/auth.guard';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes =[
    { path: 'resume',             component: HomeComponent },
    { path: 'about',     component: AboutComponent },
    { path: 'contact',           component: ContactComponent },
    { path: 'home',          component: LandingComponent},
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'project',      component: ProjectComponent },
    { path: 'result',      component: ResultComponent },
    { path: 'login',      component: UsersComponent },
    { path: 'siginup',      component: SignupComponent },
    { path: 'charts',      component: ChartsComponent },
    { path: 'profile',      component: ProfileComponent, canActivate:[AuthGaurd] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
