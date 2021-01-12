import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, catchError } from "rxjs/operators";
import { MovieModel } from './models/movie-model';
import { ResultChampionship } from './models/result-championship';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class movieWorldChampionshipService{
    constructor(
        private http: HttpClient,
      ) { }

      getMovies(): Observable<Array<MovieModel>> {    
        var url = `${environment.api}/v1/movies`;
        return this.http.get<any>(url);
      }

      PostChoices(movieIds): Observable<ResultChampionship> {
        return this.http.post<ResultChampionship>(`${environment.api}/v1/Championship`, movieIds);
      }

}