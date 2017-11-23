import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import { DealsComponent } from './deals.component'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers:[DealsComponent]
})
export class ResultComponent implements OnInit {

  constructor(private http: HttpClient, private cat:DealsComponent ) { }
//data ={};
data={deals:{},data:{}};
 a=[];
  ngOnInit() {
    this.getData1();
   // this.http.get('https://shopaye.com/api/spaye_product_categories')
   //  .subscribe(data => {this.data=data;
   //    //this.data = Array.of(this.data);
   //    console.log(this.data)
   //    //   var arr_names = [];
   //    // for(var item in data){
   //    //   arr_names.push(data[item].id)
   //    // }
   //    //  console.log("kklllklklklklk",arr_names);
   //     for (var data2 in this.data ) {
   //         this.http.get('https://shopaye.com/api/spaye_product_categories/' +data2+ '/getdeals')
   //          .subscribe(res  => {
   //            //this.deals=res ;
   //            if(res!=null){
   //          //  this.deals = Array.of(res);
   //            this.deals = res;
   //         console.log(this.deals)
   //       }
   //       })
           //console.log(arr_names[item]);
        }

    // this.http.get('https://shopaye.com/api/spaye_product_categories/' + this.ids+ '/getdeals')
    //  .subscribe(data => {this.deals=data;
    // console.log("hi")
    // console.log(data) })
     //})

  getData1():void {
    // TODO: Don't assign to this.data here:
    this.data.data=this.cat.getData()
      .subscribe (
        res => {this.data.data=res;
            console.log("effdfdfdfd",this.data.data);
            setTimeout (() => {
      console.log("Hello from setTimeout");
    }, 1000)
      const arr_names = [];
            for (var data2 in this.data.data ) {
              setTimeout (() => {
        console.log("Hello from setTimeout");
      }, 1000)
              this.data.deals=this.cat.getDeals(data2).subscribe(res  => {
                if(res!=null){
                  this.data.deals = res
                   for(var item in this.data.deals){
                     arr_names.push(this.data.deals)
                   }

                  //this.deals = Array.of(res)
            //  console.log(this.data.deals);
            }

                //this.http.get('https://shopaye.com/api/spaye_product_categories/' +data2+ '/getdeals')

              //    .subscribe(res  => {
              //      //this.deals=res ;
              //      if(res!=null){
              //    //  this.deals = Array.of(res);
              //      this.deals = res;
              //   console.log(this.deals)
              // }
              // })
                //console.log(arr_names[item]);
          })
    }

                               console.log(arr_names)


  })
}
}
