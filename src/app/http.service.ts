import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }
  user:{};
  getData(){
  return this.http.get('https://shopaye.com/api/spaye_product_categories').subscribe(data => {this.user=data;
  console.log(data) })
}

}
