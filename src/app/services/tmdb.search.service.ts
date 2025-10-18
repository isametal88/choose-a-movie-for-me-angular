
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

  searchMode = signal<'ask-me' | 'surprise-me'>('ask-me');

  setSearchResult(result: TMDBResponse<Movie>, searchMode: 'ask-me' | 'surprise-me' = 'ask-me') {
    this._result.set(result);
    this.searchMode.set(searchMode);
    this._currentMovie.set(result.results?.[0] || null);
  }

  getAnotherResult(): Movie | undefined {
    if(this.searchMode() === 'surprise-me') {
      this.goToRandomResult()
      return undefined;
    }
    let result = this._result();
    if (!!result && this.result && this.result.length > 1) {
      result = result as TMDBResponse<Movie>;
      const newMovie = result.results?.[result.results.findIndex(movie => movie.id === this._currentMovie()?.id) + 1];
      if (newMovie) {
        this._currentMovie.set(newMovie);
        return newMovie;
      }
    }
    return undefined;
  }

  goToResult() {
    if (this.currentMovie()) {
      this.router.navigate(['/movie'], { queryParams: { id: this.currentMovie()?.id } });
    }
  }

  goToRandomResult() {
    const randomMovie = this.result()?.results?.[Math.floor(Math.random() * (this.result()?.results?.length || 1))];
    if (randomMovie) {
      this._currentMovie.set(randomMovie);
      this.router.navigate(['/movie'], { queryParams: { id: randomMovie.id } });
    }
  }

  getSimilarResult() {
    const currentMovie = this.currentMovie();
    if (currentMovie) {
      this.router.navigate(['/movie'], { queryParams: { id: currentMovie.id } });
    }
  }

}
