import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, Pipe, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast, Crew, VideoType } from 'choose-a-movie-for-me-data-source';
import 'choose-a-movie-for-me-ds/availability';
import 'choose-a-movie-for-me-ds/billing-type';
import 'choose-a-movie-for-me-ds/loader';
import 'choose-a-movie-for-me-ds/movie-info';
import 'choose-a-movie-for-me-ds/people-list';
import 'choose-a-movie-for-me-ds/person';
import 'choose-a-movie-for-me-ds/provider';
import 'choose-a-movie-for-me-ds/youtube-player';
import { TmdbSearchService } from '../../services/tmdb.search.service';
import { MovieWithExtras, TMDBService } from '../../services/tmdb.service';

@Pipe({ name: 'posterPath' })
export class PosterPathPipe {
  constructor(private tmdbService: TMDBService) { }

  transform(poster_path: string | null | undefined): Promise<string | null> {
    return this.tmdbService.getPosterUrl(poster_path);
  }
}

@Pipe({ name: 'castCutter' })
export class CastCutterPipe {
  transform(cast: Cast[] | undefined): Cast[] | undefined {
    return cast ? cast.slice(0, 5) : undefined
  }
}

@Pipe({ name: 'crewSorterCutter' })
export class CrewSorterCutterPipe {
  transform(crew: Crew[] | undefined): Crew[] | undefined {

    const mainRoles = ['Director', 'Writer', 'Screenplay']

    return crew ? crew.filter(member => mainRoles.includes(member.job)).sort((a, b) => mainRoles.indexOf(a.job) - mainRoles.indexOf(b.job)) : undefined
  }
}

@Pipe({ name: 'providerLogoPath' })
export class ProviderLogoPathPipe {

  tmdbService = inject(TMDBService)

  transform(logo_path: string | null | undefined): Promise<string | null> {
    return this.tmdbService.getProviderUrl(logo_path);
  }
}


@Component({
  selector: 'app-movie',
  imports: [AsyncPipe, PosterPathPipe, CastCutterPipe, CrewSorterCutterPipe, ProviderLogoPathPipe],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieComponent {

  elementRef = inject(ElementRef)
  tmdbService = inject(TMDBService);
  tmdbSearchService = inject(TmdbSearchService);

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  loading = signal(false);
  movieId = signal<number>(0);
  errorMessage = signal<string>('');

  movie = signal<MovieWithExtras | null>(null);
  movieGenres = computed(() => this.movie()?.genres.map(g => g.name).join(', '));
  movieRuntime = computed(() => this.movie()?.runtime + ' min');
  moviePoster = computed(() => this.tmdbService.getPosterUrl(this.movie()?.poster_path));

  movieTrailerId = computed(() =>
    this.movie()?.videos?.results.find(video => video.type === VideoType.Trailer)?.key
  );

  backdropImage = computed(() => {
    const path = this.movie()?.backdrop_path;
    return path ? this.tmdbService.getBackdropUrl(path) : null;
  })

  region = signal<string>('IT')

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const movieId = +params['id'];
      if (!movieId) {
        this.errorMessage.set('ID del film non trovato nei parametri');
        return;
      }
      this.movieId.set(movieId);
      this.loadMovie(movieId);
    });
  }

  async loadMovie(id: number) {
    this.loading.set(true);
    this.errorMessage.set('');
    try {
      const movie = await this.tmdbService.getMovieDetails(id);
      console.log(`Movie loaded: ${movie.title}`);
      this.movie.set(movie);
      console.log(movie)
    } catch (error) {
      this.errorMessage.set('Errore nel caricamento del film');
    } finally {
      this.loading.set(false);
    }
  }

  nextResult() {
    this.tmdbSearchService.getAnotherResult();
}
goHome() {
this.router.navigate(['/']);
}
async goToSimilar() {
  const similar = await this.tmdbService.findSimilar(this.movieId())
  this.tmdbSearchService.setSearchResult(similar);
  this.tmdbSearchService.goToRandomResult();
}

}


