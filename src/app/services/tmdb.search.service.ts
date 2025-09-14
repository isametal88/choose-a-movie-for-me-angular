
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, TMDBResponse } from 'choose-a-movie-for-me-data-source';

/**
 * Questo servizio si occupa solo di gestire il risultato della ricerca di film.
 */
@Injectable({
  providedIn: 'root'
})
export class TmdbSearchService {

  router = inject(Router);

  result: TMDBResponse<Movie> | undefined = undefined;

  currentMovieResult: Movie | undefined = undefined;

  setSearchResult(result: TMDBResponse<Movie>) {
    this.result = result;
    this.currentMovieResult = (result.results && result.results.length > 0) ? result.results[0] : undefined;
    console.log(this.currentMovieResult)
  }

  getAnotherResult(): Movie | undefined {
    if (this.result && this.result.results && this.result.results.length > 1) {
      const newMovie = this.result.results[this.result.results.findIndex(movie => movie.id === this.currentMovieResult?.id) + 1];
      if (newMovie) {
        this.currentMovieResult = newMovie;
        return newMovie;
      }
    }
    return undefined;
  }

  constructor() { }

  goToResult() {
    if (this.currentMovieResult) {
      this.router.navigate(['/movie'], { queryParams: { id: this.currentMovieResult.id } });
    }
  }

}
