import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-suggestion-movie',
  imports: [RouterOutlet],
  template: `<router-outlet/>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestionMovieComponent { }
