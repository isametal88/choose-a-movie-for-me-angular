import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-suggestion',
  imports: [RouterOutlet],
  template: `<router-outlet/>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `::host {
   height: 100%;
  }`,

})
export class SuggestionComponent { }
