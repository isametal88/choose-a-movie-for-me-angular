import { ChangeDetectionStrategy, Component } from '@angular/core';
import 'choose-a-movie-for-me-ds/typography-heading';

@Component({
  selector: 'app-genre',
  imports: [],
  template: `<h1 cam-ds-typography-heading level=1>Choose a Genre</h1>`,
  styleUrl: './genre.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenreComponent { }
