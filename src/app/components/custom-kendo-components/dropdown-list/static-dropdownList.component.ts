import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'static-dropdown-list',
  templateUrl: './static-dropdownList.component.html',
  styleUrls: ['./static-dropdownList.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink, CommonModule, KENDO_DROPDOWNS],
})
export class StaticDropdownListComponent implements OnInit {
  @Input() optionList: any[] = [];
  @Input() filterable: boolean = false;

  public filteredData: Array<any> = [];
  /**
   * Constructor
   */
  constructor() {}

  ngOnInit(): void {
    this.filteredData = [...this.optionList]; // Initialize with full list
  }

  onFilterChange(filter: string): void {
    this.filteredData = this.optionList.filter((option) =>
      option.toLowerCase().includes(filter.toLowerCase())
    );
  }
}
