import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CoordinatesService {
    constructor(private httpClient: HttpClient) {

    }
}