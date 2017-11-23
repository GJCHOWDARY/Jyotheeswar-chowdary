import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DealsComponent  {
  constructor (
          private http:HttpClient
      ){}
      data ={};
      deals={};
      getData():Observable<any> {
      return this.http.get('https://shopaye.com/api/spaye_product_categories');
       }
       getDeals(data):Observable<any[]> {
         //console.log(data)
       return this.http.get('https://shopaye.com/api/spaye_product_categories/' +data+ '/getdeals')
       // .map((response:Response) => {
       //   return Observable.of({type: "success", payload: response.json()});
       // })
       //.map(res => this.data=res);
        }
         }
