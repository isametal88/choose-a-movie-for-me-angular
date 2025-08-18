import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import 'choose-a-movie-for-me-ds/button';

@Component({
  selector: 'app-suggestion-media',
  imports: [RouterLink],
  template: `
    <cam-ds-button aria-role="button" aria-label="Film" [routerLink]="['movie']">Film</cam-ds-button>
    <cam-ds-button aria-role="button" aria-label="Serie TV" [routerLink]="['tv-show']">Serie TV</cam-ds-button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: {
    class: 'space-around-vertical'
  }
})
export class SuggestionMediaComponent { }
