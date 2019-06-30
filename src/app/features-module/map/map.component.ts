import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

// GOOGLE MAPS
import { LatLngLiteral } from '@agm/core';

// SERVICES
import { UsersService } from '../../services/users.service';

// INTERFACES
import { Displayer } from '../../interfaces/displayer.interface';
import { User } from '../../interfaces/user.interface';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    // SUBSCRIBER
    usersLocationsSubscriber: Subscription;

    // CREATE PATH
    createPathMode = false;
    newPath: Array<LatLngLiteral> = []

    title = 'DeepAds';

    paths: Array<LatLngLiteral> = [
        { lat: 47.3923817,  lng: 8.0400504 },
        { lat: 47.3923817,  lng: 8.0401504 },
        { lat: 47.3922817, lng: 8.0401504 },
        { lat: 47.3922817, lng: 8.0400504 },
        { lat: 47.3923817,  lng: 8.0400004 }
    ]
    
    displayers: Displayer[] = [{
        _id: 'first',
        lat: 47.3923617,
        lng: 8.0400504,
        direction: 0,
        path: [
        [0,0],
        [1,0],
        [1,1],
        [0,1]
        ]
    }];

    users: User[] = [{
        _id: 'first',
        lat: 47.3919917,
        lng: 8.0401604
    }];

    lat: number = 47.3923817;
    lng: number = 8.0400504;

    constructor(private usersService: UsersService) {}

    onMapReady(map) {}

    ngOnInit() {
        
    }

    getCoordinates(event): void {
        console.log(event)
    }

    addCoordinateToPath(event): void {
        this.newPath.push({ lat: event.coords.lat, lng: event.coords.lng });
        if(this.newPath.length > 3) {
            this.newPath = [];
        }
    } 
      
    containsLocation(polygonPath, coordinates) {

        let numberOfVertexs = polygonPath.length - 1;
        let inPoly = false;
        let { lat, lng } = coordinates;

        let lastVertex = polygonPath[numberOfVertexs];
        let vertex1, vertex2;

        let x = lat, y = lng;

        let inside = false;
        for (var i = 0, j = polygonPath.length - 1; i < polygonPath.length; j = i++) {
            let xi = polygonPath[i].lat, yi = polygonPath[i].lng;
            let xj = polygonPath[j].lat, yj = polygonPath[j].lng;

            let intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }

        return inside;

    }            

}