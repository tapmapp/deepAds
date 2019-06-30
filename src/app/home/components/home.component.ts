import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// SERVICES
import { UsersLocationsService } from '../../shared-module/sockets/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // SUBSCRIBERS
  usersLocationsSubscriber: Subscription;

  constructor(private usersLocationService: UsersLocationsService) { }

  ngOnInit() {

    // SUBSCRIBERS
    this.usersLocationsSubscriber = this.usersLocationService.getMessage().subscribe(mssg => {
      console.log(mssg)
    });

  }

  ngOnDestroy() {

    // UNSUBSCRIBE
    this.usersLocationsSubscriber.unsubscribe();
  }

}
