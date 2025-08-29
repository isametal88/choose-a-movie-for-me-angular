import { inject, Injectable, LOCALE_ID, signal } from '@angular/core';
import { Genre, TMDB, TMDBConfigurationResponse, WatchProvider, WatchProvidersResponse, WatchRegion, WatchRegionsResponse } from 'choose-a-movie-for-me-data-source';

@Injectable({
  providedIn: 'root'
})
export class TMDBService {

  locale = inject(LOCALE_ID)

  tmdbApiKey = '8ccd470b081b71f4a0e2f94c9ce2e07a';
  tmdb: TMDB;

  genres_ = signal<Genre[]>([]);
  genres = this.genres_.asReadonly();

  regions_ = signal<WatchRegion[]>([]);
  regions = this.regions_.asReadonly();

  region = signal<WatchRegion>({ iso_3166_1: 'IT', english_name: 'Italy', native_name: 'Italia' })

  providers_ = signal<WatchProvider[]>([]);
  providers = this.providers_.asReadonly();

  constructor() {
    this.tmdb = new TMDB({
      apiKey: this.tmdbApiKey,
      language: this.locale,
      region: this.locale.split('-')[1] || 'US',
    })

    this.loadInitialData();
  }

  async loadInitialData() {

    const config: TMDBConfigurationResponse = await this.tmdb.configuration.getConfiguration();

    const { genres } = await this.getGenres();
    this.genres_.set(genres);
    const { results: regions } = await this.getRegions();
    console.log(regions)
    const { results: providers } = await this.getWatchProviders();
    this.providers_.set(providers?.sort((a, b) => {
      if (a.display_priority < b.display_priority) return -1;
      if (a.display_priority > b.display_priority) return 1;
      return 0;
    }).slice(0, 15).map(provider => ({
      ...provider,
      logo_path: config.images.secure_base_url + 'w45' + provider.logo_path
    })) || [])

    console.log(config)
  }

  async discover(query: { providers: number[], genres: number[] }): Promise<any> {
    return await this.tmdb.movies.discoverMovies({
      withGenres: query.genres.join('|'),
      withWatchProviders: query.providers.join('|'),
      sortBy: 'popularity.desc',
      voteAverageGte: 7.5,
      watchRegion: this.region().iso_3166_1
    });
  }

  async getGenres(): Promise<{ genres: Genre[] }> {
    return this.tmdb.search.getMovieGenres()
  }

  async getRegions(): Promise<WatchRegionsResponse> {
    return this.tmdb.watchProviders.getAvailableRegions()
  }

  async getWatchProviders(): Promise<WatchProvidersResponse> {
    return this.tmdb.watchProviders.getMovieProviders('US')
  }
}