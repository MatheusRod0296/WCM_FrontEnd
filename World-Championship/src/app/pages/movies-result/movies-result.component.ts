import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ResultChampionship } from '../../components/models/result-championship';
import { movieWorldChampionshipService } from '../../components/movies-world-championship.service';

@Component({
  selector: 'app-movies-result',
  templateUrl: './movies-result.component.html',
  styleUrls: ['./movies-result.component.css']
})
export class MoviesResultComponent implements OnInit {

  private subscribe: Subscription;

  public resultMovie: ResultChampionship;
  
  constructor(private service: movieWorldChampionshipService
            , private router: Router) { }

  ngOnInit(): void {
    var moviesIds = JSON.parse(localStorage.getItem('moviesIds'));
    if (!moviesIds) this.router.navigate(['/']);
    this.subscribe = this.service.PostChoices(moviesIds)
      .subscribe(data => {
        this.resultMovie = data;          
      });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}
