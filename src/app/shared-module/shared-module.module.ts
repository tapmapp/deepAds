import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';

// MODULES
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// COMPONENTS
import { HeaderComponent } from './components/header/header.component';

// SERVICES
import { UsersLocationsService } from '../shared-module/sockets/socket.service';
import { UsersService } from '../services/users.service';

const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SocketIoModule.forRoot(config),
  ],
  exports: [
    SocketIoModule,
    HeaderComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UsersLocationsService,
        UsersService
      ]
    }
    
  } 
}
