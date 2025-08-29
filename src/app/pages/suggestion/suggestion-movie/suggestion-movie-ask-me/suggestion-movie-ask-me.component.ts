import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import 'choose-a-movie-for-me-ds/button';
import 'choose-a-movie-for-me-ds/checkbox-container';
import 'choose-a-movie-for-me-ds/provider';
import 'choose-a-movie-for-me-ds/typography-heading';
import { TMDBService } from '../../../../services/tmdb.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <cam-ds-heading level="2">Choose a Service</cam-ds-heading>

    <p>Selezionati: {{ selectedCountProviders() }}</p>

    <div class="providers">
      @for (p of providers(); track p.provider_id) {
        <cam-ds-checkbox-container
          (change)="toggleService(p.provider_id, $event)"
          [attr.aria-label]="p.provider_name"
          [attr.aria-checked]="isSelectedService(p.provider_id)">
          <cam-ds-provider [attr.src]="p.logo_path" [attr.alt]="p.provider_name"></cam-ds-provider>
        </cam-ds-checkbox-container>
      } @empty {
        <p>Nessun provider disponibile</p>
      }
    </div>

    <cam-ds-heading level="2">Choose a Genre</cam-ds-heading>
        
        <p>Selezionati: {{ selectedCountGenres() }}</p>
    
        <div class="genres">
          @for (g of genres(); track g) {
            <cam-ds-checkbox-container
              (change)="toggleGenre(g.id, $event)"
              [attr.aria-label]="g.name"
              [attr.aria-checked]="isSelectedGenre(g.id)">
             {{g.name}}
            </cam-ds-checkbox-container>
          } @empty {
            <p>Nessun provider disponibile</p>
          }
        </div>

      <cam-ds-button (click)="search()">Cerca</cam-ds-button>
  `,
  styleUrls: ['./suggestion-movie-ask-me.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SuggestionMovieAskMeComponent {
  tmdbService = inject(TMDBService);


  // signal that holds the array of providers (mocked for now)
  providers = this.tmdbService.providers;

  // writable signal that holds the set of selected provider ids
  private selectedProviders = signal<Set<number>>(new Set());

  // derived/computed signal showing how many are selected
  selectedCountProviders = computed(() => this.selectedProviders().size);

  // helper used from the template
  isSelectedService(id: number) {
    return this.selectedProviders().has(id);
  }

  // toggle selection — update the signal immutably by creating a new Set
  toggleService(id: number, el: Event) {
    const hasChecked = (el as CustomEvent).detail?.checked;
    const next = new Set(this.selectedProviders());
    if (hasChecked) next.add(id);
    else next.delete(id);
    this.selectedProviders.set(next);
    return;
  }

  // signal that holds the array of genres
  genres = this.tmdbService.genres

  // writable signal that holds the set of selected genre ids
  private selectedGenres = signal<Set<number>>(new Set());

  // derived/computed signal showing how many are selected
  selectedCountGenres = computed(() => this.selectedGenres().size);

  // helper used from the template
  isSelectedGenre(genreId: number) {
    return this.selectedGenres().has(genreId);
  }

  // toggle selection — update the signal immutably by creating a new Set
  toggleGenre(genreId: number, el: Event) {
    const hasChecked = (el as CustomEvent).detail?.checked;
    const next = new Set(this.selectedGenres());
    if (hasChecked) next.add(genreId);
    else next.delete(genreId);
    this.selectedGenres.set(next);
    return;
  }

  async search() {

    const movies = await this.tmdbService.discover({
      providers: Array.from(this.selectedProviders()),
      genres: Array.from(this.selectedGenres())
    });

    const genres = await this.tmdbService.getGenres();

    console.log(this.selectedProviders(), this.selectedGenres())

    console.log(movies, genres)

    const result = this.tmdbService.discover({
      providers: Array.from(this.selectedProviders()),
      genres: Array.from(this.selectedGenres())
    });
  }

}
