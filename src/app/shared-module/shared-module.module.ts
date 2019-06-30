import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '../../../node_modules/@angular/compiler/src/core';

// SERVICES
import { UsersService } from '../services/users.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UsersService
      ]
    }
    
  } 
}
