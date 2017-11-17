import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
  user:{};
  getData(){
  return this.http.get('https://shopaye.com/api/spaye_product_categories').subscribe(data => {this.user=data;
  console.log(data) })
}

}
