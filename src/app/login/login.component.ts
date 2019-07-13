import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { findIndex } from 'underscore';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Star Wars';
  loginForm: FormGroup;
  name: string;
  passcode: string;
  personList: any[];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = formBuilder.group({
      name: ['', Validators.required],
      passcode: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.http.get('https://swapi.co/api/people/')
    .subscribe((response: any) => {
      this.personList = response.results;
    }, error => {
      console.log(error);
    });
  }

  logIn(loginForm: any) {
    this.name = loginForm.controls.name.value;
    this.passcode = loginForm.controls.passcode.value;

    this.logInAuthorize();
  }

  logInAuthorize() {
    const index = findIndex(this.personList, { 'name': this.name.trim()});
    if (index === -1) {
      alert( 'Name doesnt matches our records.');
    } else if (this.personList[index].birth_year !== this.passcode) {
        alert( 'Passcode in incorrect Mr. ' + this.name);
    } else {
      sessionStorage.setItem('loggerName', this.name);
      this.router.navigate(['search']);
    }
  }

}
