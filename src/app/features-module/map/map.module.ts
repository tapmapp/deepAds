import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// GOOGLE MAPS
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map.component';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    AgmCoreModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7LsAjrLMq15GnRFuxrkqddLMQHqWE52w'
    }),
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
