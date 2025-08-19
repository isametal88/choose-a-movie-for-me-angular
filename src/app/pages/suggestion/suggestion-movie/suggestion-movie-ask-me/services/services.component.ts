import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import 'choose-a-movie-for-me-ds/provider';
import 'choose-a-movie-for-me-ds/provider-checkbox';
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

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <cam-ds-heading level="2">Choose a Service</cam-ds-heading>

    <p>Selezionati: {{ selectedCount() }}</p>

    <div class="providers">
      @for (p of providers(); track p.id) {
        <cam-ds-provider-checkbox
          (click)="toggle(p.id, $event.currentTarget)"
          [attr.aria-label]="p.name"
          [attr.aria-checked]="isSelected(p.id)">
          <cam-ds-provider [attr.src]="p.src" [attr.alt]="p.alt"></cam-ds-provider>
        </cam-ds-provider-checkbox>
      } @empty {
        <p>Nessun provider disponibile</p>
      }
    </div>
  `,
  styleUrls: ['./services.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicesComponent {
  // signal that holds the array of providers (mocked for now)
  providers = signal<Provider[]>(MOCK_PROVIDERS);

  // writable signal that holds the set of selected provider ids
  private selected = signal<Set<number>>(new Set());

  // derived/computed signal showing how many are selected
  selectedCount = computed(() => this.selected().size);

  // helper used from the template
  isSelected(id: number) {
    return this.selected().has(id);
  }

  // toggle selection — update the signal immutably by creating a new Set
  toggle(id: number, el?: EventTarget | null) {
    // If the element reference is provided, prefer reading its "checked" attribute
    if (el && (el as Element).getAttribute && typeof (el as Element).getAttribute === 'function') {
      const element = el as Element;
      const hasChecked = element.getAttribute('checked') !== null && element.getAttribute('checked') !== 'false';
      const next = new Set(this.selected());
      if (hasChecked) next.add(id);
      else next.delete(id);
      this.selected.set(next);
      return;
    }

    // Fallback: toggle the current state
    const next = new Set(this.selected());
    if (next.has(id)) next.delete(id);
    else next.add(id);
    this.selected.set(next);
  }

  // observe external changes to cam-ds-provider-checkbox 'checked' attribute
  private _observers = new Map<Element, MutationObserver>();

  ngAfterViewInit(): void {
    // find all provider checkbox elements and observe attribute changes
    const els = Array.from(document.querySelectorAll('cam-ds-provider-checkbox')) as Element[];
    els.forEach((el, idx) => {
      const provider = this.providers()[idx];
      if (!provider) return;
      const id = provider.id;
      const obs = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === 'attributes' && m.attributeName === 'checked') {
            const hasChecked = el.getAttribute('checked') !== null && el.getAttribute('checked') !== 'false';
            const next = new Set(this.selected());
            if (hasChecked) next.add(id);
            else next.delete(id);
            this.selected.set(next);
          }
        }
      });
      obs.observe(el, { attributes: true, attributeFilter: ['checked'] });
      this._observers.set(el, obs);
      // initialize based on current attribute
      const initChecked = el.getAttribute('checked') !== null && el.getAttribute('checked') !== 'false';
      if (initChecked) {
        const next = new Set(this.selected());
        next.add(id);
        this.selected.set(next);
      }
    });
  }

  ngOnDestroy(): void {
    this._observers.forEach((obs) => obs.disconnect());
    this._observers.clear();
  }
}
