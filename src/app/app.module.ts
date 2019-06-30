import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// GOOGLE MAPS
import { AgmCoreModule } from '@agm/core';

// LOCAL STORAGE
import { LocalStorageModule } from 'angular-2-local-storage';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared-module/shared-module.module';

// COMPONENTS
import { AppComponent } from './app.component';

// SERVICES
import { ChatService } from './sockets/socket';

const config: SocketIoConfig = { url: 'http://localhost:80', options: {} };

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7LsAjrLMq15GnRFuxrkqddLMQHqWE52w'
    }),
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    // APP MODULES
    SharedModule.forRoot(),
    UsersModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
