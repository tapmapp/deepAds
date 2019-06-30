import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

// INTERFACES
import { User } from '../interfaces/user.interface';

@Injectable()
export class UsersService {

    users = new Subject<User[]>();

    constructor(private http: HttpClient) {
        this.getUsers();
    }

    async getUsers() {
        try {
            return await this.http.get('/users');
        } catch (err) {

        }

    }

}