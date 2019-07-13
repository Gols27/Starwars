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
 heroes = [
   { id: 11, name: 'Mr. Nice', country: 'India' },
   { id: 12, name: 'Narco' , country: 'USA'},
   { id: 13, name: 'Bombasto' , country: 'UK'},
   { id: 14, name: 'Celeritas' , country: 'Canada' },
   { id: 15, name: 'Magneta' , country: 'Russia'},
   { id: 16, name: 'RubberMan' , country: 'China'},
   { id: 17, name: 'Dynama' , country: 'Germany'},
   { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
   { id: 19, name: 'Magma' , country: 'South Africa'},
   { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
 ];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('https://swapi.co/api/planets/')
    .subscribe((response: any) => {
      this.planetList = response.results;
    }, error => {
      console.log(error);
    });
  }



}
