import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KENDO_TEXTBOX } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  standalone: true,
  imports: [
    KENDO_TEXTBOX,
  ]
})
export class SearchInputComponent {
  @Input() placeholder: string = 'Search';
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(value: string): void {
    this.valueChange.emit(value);
  }  
}
