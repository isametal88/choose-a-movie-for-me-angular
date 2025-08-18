import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import 'choose-a-movie-for-me-ds/button';

@Component({
  selector: 'app-suggestion-movie-mode',
  imports: [RouterLink],
  template: `
    <cam-ds-button aria-role="button" aria-label="Sorprendimi" [routerLink]="['surprise-me']">Sorprendimi</cam-ds-button>
    <cam-ds-button aria-role="button" aria-label="Chiedimi" [routerLink]="['ask-me']">Chiedimi</cam-ds-button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: {
    class: 'space-around-vertical'
  }
})
export class SuggestionMovieModeComponent { }
