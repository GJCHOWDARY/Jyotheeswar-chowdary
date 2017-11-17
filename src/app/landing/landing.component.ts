import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  constructor( private http: HttpClient ) { }
user= {};
  ngOnInit() {
this.http.get('https://shopaye.com/api/spaye_product_categories').subscribe(data => {this.user=data;
console.log(data) })
  }

}
