
import { inject, Injectable, signal } from '@angular/core';
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

  private readonly _result = signal<TMDBResponse<Movie> | null>(null);
  private readonly _currentMovie = signal<Movie | null>(null);
  
  readonly result = this._result.asReadonly();
  readonly currentMovie = this._currentMovie.asReadonly();

  setSearchResult(result: TMDBResponse<Movie>) {
     this._result.set(result);
    this._currentMovie.set(result.results?.[0] || null);
  }

  getAnotherResult(): Movie | undefined {
    const result = this._result();
    if (!!result && this.result.results && this.result.results.length > 1) {
      const newMovie = this._result().results[this._result().results.findIndex(movie => movie.id === this._currentMovie()?.id) + 1];
      if (newMovie) {
        this._currentMovie.set(newMovie);
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
