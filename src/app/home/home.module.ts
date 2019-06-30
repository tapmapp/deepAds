import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { HomeRoutingModule } from './home-routing.module';
import { FeaturesModule } from '../features-module/features-module.module';
import { SharedModule } from '../shared-module/shared-module.module';

// COMPONENTS
import { HomeComponent } from './components/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FeaturesModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
