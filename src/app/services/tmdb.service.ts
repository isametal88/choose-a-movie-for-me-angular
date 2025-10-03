import { inject, Injectable, LOCALE_ID, signal } from '@angular/core';
import { Credits, Genre, Movie, MovieAppendToResponse, MovieDetails, MovieWatchProvidersResponse, TMDB, TMDBConfigurationResponse, TMDBResponse, VideosResponse, WatchProvider, WatchProvidersResponse, WatchRegion, WatchRegionsResponse } from 'choose-a-movie-for-me-data-source';

export type MovieWithExtras = MovieDetails & { credits: Credits, videos: VideosResponse, 'watch/providers': MovieWatchProvidersResponse };


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
    const userInfo = getUserLocaleInfo()

    this.tmdb = new TMDB({
      apiKey: this.tmdbApiKey,
      language: userInfo.language,
      region: userInfo.region || 'IT',
    })

    this.loadInitialData();
  }

  async loadInitialData() {

    const config: TMDBConfigurationResponse = await this.tmdb.configuration.getConfiguration();

    const { genres } = await this.getGenres();
    this.genres_.set(genres);
    const { region } = this.tmdb.getConfig();

    const { results: providers } = await this.getWatchProviders(region);

    this.providers_.set(providers?.sort((a, b) => {
      if (a.display_priorities[region] < b.display_priorities[region]) return -1;
      if (a.display_priorities[region] > b.display_priorities[region]) return 1;
      return 0;
    }).slice(0, 20).map(provider => ({
      ...provider,
      logo_path: config.images.secure_base_url + 'w45' + provider.logo_path
    })) || [])
  }

  async discover(query: { providers: number[], genres: number[] }): Promise<TMDBResponse<Movie>> {
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

  async getWatchProviders(region: string): Promise<WatchProvidersResponse> {
    return this.tmdb.watchProviders.getMovieProviders(region)
  }

  async getMovieDetails(id: number): Promise<MovieWithExtras> {
    return this.tmdb.movies.getMovie(id, [MovieAppendToResponse.Credits, MovieAppendToResponse.Videos, MovieAppendToResponse.WatchProviders, MovieAppendToResponse.Images]) as Promise<MovieWithExtras>;
  }

  async getPosterUrl(poster_path: string | null | undefined): Promise<any> {

    if (!poster_path) return null;
    const config: TMDBConfigurationResponse = await this.tmdb.configuration.getConfiguration();
    return config.images.secure_base_url + config.images.poster_sizes[1] + poster_path;
  }

  async getBackdropUrl(path: string): Promise<any> {

    if (!path) return null;
    const config: TMDBConfigurationResponse = await this.tmdb.configuration.getConfiguration();
    return config.images.secure_base_url + 'original' + path;
  }

  async getProviderUrl(logo_path: string | null | undefined): Promise<string | null> {

    if (!logo_path) return null;
    const config: TMDBConfigurationResponse = await this.tmdb.configuration.getConfiguration();
    return config.images.secure_base_url + config.images.logo_sizes[0] + logo_path;
  }
}

function getUserLocaleInfo() {
  const primaryLanguage = navigator.language;
  const allLanguages = navigator.languages || [primaryLanguage];
  const [language, region] = primaryLanguage.split('-');

  return {
    primaryLanguage,
    language,
    region: region || null,
    allLanguages,
  };
}