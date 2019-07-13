import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 title: string =  'Search Planets';
 searchText: string;
 planetList: any[];
 planetNameList: any[];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('https://swapi.co/api/planets/')
    .subscribe((response: any) => {
      this.planetList =  response.results.map(item => {
         if (item.population === 'unknown'){
           item.population = '0';
         }
         return item;
       }).sort((a, b) => {
          return b.population - a.population;
        });
      this.planetNameList = this.planetList.map(item => item.name);
    }, error => {
      console.log(error);
    });
  }



}
