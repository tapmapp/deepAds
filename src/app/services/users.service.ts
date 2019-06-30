import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

// ENVIRONMENTS
import { environment } from '../../environments/environment';

// INTERFACES
import { User } from '../interfaces/user.interface';

@Injectable()
export class UsersService {

    users = new Subject<User[]>();

    constructor(private http: HttpClient) {}

    async getUsers(): Promise<Object> {
        return await this.http.get<User[]>(`${environment.apiUrl}/users`).toPromise();
    }

}