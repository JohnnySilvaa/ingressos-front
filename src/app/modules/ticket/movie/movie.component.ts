import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { MovieService } from '../../../services/movie/movie.service';
import { MovieModel } from 'src/app/shared/models/movie.model';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})




export class MovieComponent implements OnInit {

  data: MovieModel[] = [];
  displayedColumns: string[] = ['movieName', 'movieDurarion', 'moviePrice'];
  isLoadingResults = true;

  constructor(private router: Router, private movieService: MovieService, private authService: AuthService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.data = movies;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
