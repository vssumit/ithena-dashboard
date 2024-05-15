import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numerical-widget',
  templateUrl: './numerical-widget.component.html',
  styleUrls: ['./numerical-widget.component.scss'],
})
export class NumericalWidgetComponent {
  @Input() prefix: string | null = null;
  @Input() suffix: string | null = null;
  @Input() value: number | null = null;
  @Input() calculatedRate: number | null = null;
  @Input() analysis: string | null = null;
}
