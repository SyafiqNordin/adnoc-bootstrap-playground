import {
  Component,
  ViewEncapsulation,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { setAssetPath } from '@esri/calcite-components/dist/components';
setAssetPath('https://js.arcgis.com/calcite-components/2.13.2/assets');

import '@arcgis/map-components/dist/components/arcgis-map';
import '@arcgis/map-components/dist/components/arcgis-zoom';
import '@arcgis/map-components/dist/components/arcgis-search';
import '@arcgis/map-components/dist/components/arcgis-legend';
import '@arcgis/map-components/dist/components/arcgis-bookmarks';
import '@arcgis/map-components/dist/components/arcgis-expand';
import '@arcgis/map-components/dist/components/arcgis-basemap-toggle';
import '@arcgis/map-components/dist/components/arcgis-basemap-gallery';

@Component({
  selector: 'static-field-network',
  templateUrl: './static-fieldNetwork.component.html',
  styleUrls: ['./static-fieldNetwork.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StaticFieldNetworkComponent {
  /**
   * Constructor
   */
  constructor() {}

  arcgisViewReadyChange(event: any) {
    console.log('MapView ready', event);
  }
}
