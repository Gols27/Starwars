import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { searchNamePipe } from '../searchName.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    PageNotFoundComponent,
    searchNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TagInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
