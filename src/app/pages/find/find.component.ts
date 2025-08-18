import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-find',
  imports: [],
  template: `<p>find works!</p>`,
  styleUrl: './find.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindComponent { }
