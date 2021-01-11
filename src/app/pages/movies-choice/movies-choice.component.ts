import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { movieWorldChampionshipService } from '../../components/movies-world-championship.service';
import { MovieModel } from '../../components/models/movie-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-choice',
  templateUrl: './movies-choice.component.html',
  styleUrls: ['./movies-choice.component.css']
})
export class MoviesChoiceComponent implements OnInit {

  private subscribe: Subscription;

  public movies: Array<MovieModel> = Array<MovieModel>();
  public pickedMovies: Array<string> = Array<string>();

  public IsDisabledCheckBox: boolean = false;

  constructor(private service: movieWorldChampionshipService,
     private route: Router) { }

  ngOnInit(): void {
    this.loadingMovies();
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  checkCheckBoxvalue(movie: MovieModel) {
    movie.checked = !movie.checked;
    if (movie.checked)
      this.pickMovie(movie.id);
    else
      this.removeMovie(movie.id);
  }

  execute() {
    debugger;
    localStorage.setItem('moviesIds', JSON.stringify(this.pickedMovies));
    this.route.navigate(['/champion']);
  }

  private loadingMovies() {
    this.subscribe = this.service.getMovies()
      .subscribe(data => {
        this.movies = data
          .map(opt => new MovieModel(opt.id, opt.titulo, opt.ano, opt.nota, false));
      });
  }

  private pickMovie(id) {
    this.pickedMovies.push(id);
    if (this.pickedMovies.length >= 8)
      this.IsDisabledCheckBox = true;
  }

  private removeMovie(id) {
    this.pickedMovies.splice(this.pickedMovies.indexOf(id), 1);
    if (this.pickedMovies.length <= 8)
      this.IsDisabledCheckBox = false;
  }




}
