import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieModel } from '../../shared/models/movie.model';
import { Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = 'localhost:8080/api/movies'
@Injectable({
  providedIn: 'root'
})

export class MovieService {


  constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(apiUrl + 'Movie')
      .pipe(
        tap(_ => this.log('fetched Movies')),
        catchError(this.handleError('getMovies', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
