import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SectionModel } from 'src/app/shared/models/section.model';
import { MovieModel } from 'src/app/shared/models/movie.model';
import { SectionService } from 'src/app/services/section/section.service';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {

  sectionList: Observable<SectionModel[]>;
  movieList: Observable<MovieModel[]>;

  constructor(private sectionService: SectionService, private movieService: MovieService) { }

  ngOnInit() {
    this.sectionList = this.sectionService.getSections();
    this.movieList = this.movieService.getMovies();

  }

}
