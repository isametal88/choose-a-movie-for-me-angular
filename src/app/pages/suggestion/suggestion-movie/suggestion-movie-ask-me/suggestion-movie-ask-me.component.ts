import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import 'choose-a-movie-for-me-ds/button';
import 'choose-a-movie-for-me-ds/checkbox-container';
import 'choose-a-movie-for-me-ds/provider';
import 'choose-a-movie-for-me-ds/typography-heading';

interface Provider {
  id: number;
  src: string;
  alt: string;
  name: string;
}

const MOCK_PROVIDERS: Provider[] = [
  { id: 1, src: '/logo-netflix.svg', alt: 'Netflix', name: 'Netflix' },
  { id: 2, src: '/logo-disney.svg', alt: 'Disney+', name: 'Disney+' },
  { id: 3, src: '/logo-prime.svg', alt: 'Prime Video', name: 'Prime Video' },
  { id: 4, src: '/logo-hbo.svg', alt: 'HBO Max', name: 'HBO Max' },
];

const MOCK_GENRES: string[] = [
  "Horror",
  "Comedy"
];

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <cam-ds-heading level="2">Choose a Service</cam-ds-heading>

    <p>Selezionati: {{ selectedCountProviders() }}</p>

    <div class="providers">
      @for (p of providers(); track p.id) {
        <cam-ds-checkbox-container
          (change)="toggleService(p.id, $event)"
          [attr.aria-label]="p.name"
          [attr.aria-checked]="isSelectedService(p.id)">
          <cam-ds-provider [attr.src]="p.src" [attr.alt]="p.alt"></cam-ds-provider>
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
              (change)="toggleGenre(g, $event)"
              [attr.aria-label]="g"
              [attr.aria-checked]="isSelectedGenre(g)">
             {{g}}
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
  // signal that holds the array of providers (mocked for now)
  providers = signal<Provider[]>(MOCK_PROVIDERS);

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

  // signal that holds the array of genres (mocked for now)
  genres = signal<string[]>(MOCK_GENRES);

  // writable signal that holds the set of selected genre ids
  private selectedGenres = signal<Set<string>>(new Set());

  // derived/computed signal showing how many are selected
  selectedCountGenres = computed(() => this.selectedGenres().size);

  // helper used from the template
  isSelectedGenre(genre: string) {
    return this.selectedGenres().has(genre);
  }

  // toggle selection — update the signal immutably by creating a new Set
  toggleGenre(genre: string, el: Event) {
    const hasChecked = (el as CustomEvent).detail?.checked;
    const next = new Set(this.selectedGenres());
    if (hasChecked) next.add(genre);
    else next.delete(genre);
    this.selectedGenres.set(next);
    return;
  }

  search() {
    console.log(this.selectedProviders(), this.selectedGenres())
  }

}
