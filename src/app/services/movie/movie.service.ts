import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieModel } from '../../shared/models/movie.model';
import { Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AngularfirebaseService } from 'src/app/shared/helpers/angularfirebase.service';

const apiUrl = 'localhost:8080/api/movies'
@Injectable({
  providedIn: 'root'
})

export class MovieService {


  constructor(private afb: AngularfirebaseService) { }

  getMovies() {
    return this.afb.colWithIds$<MovieModel[]>('movies');
  }
}
