import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { MoviesChoiceComponent } from './pages/movies-choice/movies-choice.component';
import { MoviesResultComponent } from './pages/movies-result/movies-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesChoiceComponent,
    MoviesResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
