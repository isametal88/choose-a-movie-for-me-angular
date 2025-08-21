import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'choose-a-movie-for-me-ds/loader';
import 'choose-a-movie-for-me-ds/movie-info';

@Component({
  selector: 'app-movie',
  imports: [],
  template: `
    <div class="movie-container">
      @if (loading()) {
        <div class="loader-container">
          <cam-ds-loader></cam-ds-loader>
        </div>
      } @else if (errorMessage()) {
        <div class="error-container">
          <p class="error-message">{{ errorMessage() }}</p>
        </div>
      } @else if (movieId()) {
         <p>Movie ID: {{ movieId() }}</p>
        <div class="movie-content">
          <div class="first">
            <cam-ds-movie-info 
            title="Inception" 
            genres="Azione, Fantascienza" 
            duration="148 min" 
            rating="8.7" 
            poster="/inception.jpg" 
            poster-alt="Poster Inception">
            <p>Dom Cobb è un ladro specializzato nell'estrazione: ruba i segreti dal subconscio durante il sonno, quando la mente è più vulnerabile.</p>
        </cam-ds-movie-info>
          </div>
           <div class="second">Pippo</div>
           <div class="third">Pluto</div>
         
          
        </div>
      }
    </div>
  `,
  styleUrl: './movie.component.css',
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
