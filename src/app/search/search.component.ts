import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { findIndex } from 'underscore';

@Component({
  selector: 'app-order',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 title: string =  'Search Planets';
 searchText: string;
 planetList: any[] = [];
 planetNameList: any[];
  constructor(private http: HttpClient, private router: Router) {
    if( !sessionStorage.getItem('loggerName') ){
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.http.get('https://swapi.co/api/planets/')
    .subscribe((response: any) => {
      this.planetNameList =  response.results.map(item => {
         if (item.population === 'unknown'){
           item.population = '0';
         }
         return item;
       }).sort((a, b) => {
          return b.population - a.population;
        });
    }, error => {
      console.error('There is some issue with the server response, please try after some time');
    });
  }

  logOut(): void {
    if ( sessionStorage.getItem('loggerName') ) {
      sessionStorage.setItem('loggerName', '');
      this.router.navigate(['login']);
    }
  }

  addChip(tag): void{
    if ( tag.url ){
    this.http.get(tag.url)
    .subscribe((response: Object) => {
      this.planetList.push(response);
    }, error => {
      console.error('There is some issue with the server response, please try after some time');
    });
    } else {
      console.info('This Planet details are not present in the system');
    }
  }

  removeChip(tag): void {
    if(tag.name) {
      const objIndex =  findIndex(this.planetList, { 'name': tag.name.trim()});
      this.planetList.splice(objIndex,1);
    } else {
      console.info('This Planet is not present in the system');
    }
  }

}
