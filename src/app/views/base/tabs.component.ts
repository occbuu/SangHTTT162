import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  templateUrl: 'tabs.component.html',
  styleUrls: ['./cards.component.css']
})
export class TabsComponent {
  style: any;
  keyword: any;
  result = new Array();
  resultpagi = new Array();
  data: any[];
  page: number = 1;
  maxRecord: number = 10;
  constructor(public http: HttpClient, private route: ActivatedRoute) {
    if (localStorage.getItem('username') !== 'admin') {
      this.style = { 'display': 'none' }
    }
    this.http.get("./assets/data.json").subscribe(
      data => {
        this.data = data as any[];	 // FILL THE ARRAY WITH DATA.
        this.result = data as any[];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
        this.route.queryParams.subscribe(params => {
          if (params['page'] != null) {
            this.page = params['page'];
          }
          if (this.page > 0) {
            var start = (this.page - 1) * this.maxRecord;
            var end = (this.page * this.maxRecord) + 1;
            this.resultpagi = [];
            if(end > this.result.length) {
              start = 0;
              end = 11;
            }
            for (var i = start; i < end; i++) {
              this.resultpagi.push(this.result[i]);
            }
          }
        });
      },
    );

    
  }


  download() {
    window.open('http://lib.hunre.edu.vn/Gg-6706-ggdx-Tin%20hoc%20co%20so.pdf', '_blank');
  }

  clickSearch() {
    this.result = [];
    this.resultpagi = [];
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].title.includes(this.keyword)) {
        this.result.push(this.data[i]);
      }
    }
    let max = 0;
    if(this.maxRecord >= this.result.length) {
      max = this.result.length;
    }
    else {
      max = this.maxRecord;
    }
    for (var i = 0; i < max; i++) {
      this.resultpagi.push(this.result[i]);
    }
  }
}
