import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

 import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { ProjectComponent } from './project/project.component';
import { ResultComponent } from './result/result.component';
//import { DealsComponent } from './result/deals.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './users/signup.component';
import { AuthService } from  './users/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    ProjectComponent,
    ResultComponent,
    //DealsComponent,
    UsersComponent,
    SignupComponent
    ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
