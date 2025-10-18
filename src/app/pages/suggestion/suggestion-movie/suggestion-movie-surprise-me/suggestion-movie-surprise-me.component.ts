import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TmdbSearchService } from '../../../../services/tmdb.search.service';
import { TMDBService } from '../../../../services/tmdb.service';

@Component({
  selector: 'app-suggestion-movie-surprise-me',
  imports: [],
  template: `<p>suggestion-movie-surprise-me works!</p>`,
  styleUrl: './suggestion-movie-surprise-me.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestionMovieSurpriseMeComponent { 

  tmdbService = inject(TMDBService);
  tmdbSearchService = inject(TmdbSearchService);

  ngOnInit() {
    this.search();
  }

  async search() {

    const result = await this.tmdbService.discoverWide();
    this.tmdbSearchService.setSearchResult(result, 'surprise-me');

    this.tmdbSearchService.goToRandomResult();
  }
}
