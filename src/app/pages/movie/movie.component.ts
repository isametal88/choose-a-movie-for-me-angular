import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'choose-a-movie-for-me-ds/availability';
import 'choose-a-movie-for-me-ds/billing-type';
import 'choose-a-movie-for-me-ds/loader';
import 'choose-a-movie-for-me-ds/movie-info';
import 'choose-a-movie-for-me-ds/people-list';
import 'choose-a-movie-for-me-ds/person';
import 'choose-a-movie-for-me-ds/provider';
import 'choose-a-movie-for-me-ds/youtube-player';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieComponent {

  activatedRoute = inject(ActivatedRoute);
  loading = signal(false);
  movieId = signal<string>('');
  errorMessage = signal<string>('');

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const movieId = params['id'];
      if (!movieId) {
        this.errorMessage.set('ID del film non trovato nei parametri');
        return;
      }
      this.movieId.set(movieId);
      this.loadMovie(movieId);
    });
  }

  private loadMovie(id: string) {
    this.loading.set(true);
    this.errorMessage.set('');
    // Simulate an API call
    setTimeout(() => {
      console.log(`Movie loaded: ${id}`);
      this.loading.set(false);
    }, 500);
  }

}
