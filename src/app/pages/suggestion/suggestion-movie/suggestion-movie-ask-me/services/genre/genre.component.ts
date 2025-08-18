import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-genre',
  imports: [],
  template: `<p>genre works!</p>`,
  styleUrl: './genre.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenreComponent { }
