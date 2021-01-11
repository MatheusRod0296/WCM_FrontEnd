import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesChoiceComponent } from './pages/movies-choice/movies-choice.component';
import { MoviesResultComponent } from './pages/movies-result/movies-result.component';

const routes: Routes = [
  { path: '', component: MoviesChoiceComponent },
  { path: 'champion', component: MoviesResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
