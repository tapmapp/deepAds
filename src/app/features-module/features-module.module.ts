import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { MapModule } from './map/map.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MapModule,
    UsersModule
    // SharedModule
  ],
  exports: [
    MapModule,
    UsersModule
  ]
})
export class FeaturesModule {}
