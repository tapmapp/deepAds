import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// LOCAL STORAGE
import { LocalStorageModule } from 'angular-2-local-storage';

// MODULES
import { AppRoutingModule } from './app-routing.module';

import { FeaturesModule } from './features-module/features-module.module';
import { SharedModule } from './shared-module/shared-module.module';

// COMPONENTS
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LocalStorageModule.forRoot({
      prefix: 'DeepAds',
      storageType: 'localStorage'
    }),
    AppRoutingModule,
    // APP MODULES
    FeaturesModule,
    SharedModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
