import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
 
@Injectable()
export class UsersLocationsService {
 
    constructor(private socket: Socket) {}
 
    sendMessage(msg: string){
        this.socket.emit("test", msg);
    }
     getMessage() {
        return this.socket.fromEvent("news");
    }
}
