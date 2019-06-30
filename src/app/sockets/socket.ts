import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
 
@Injectable()
export class ChatService {
 
    constructor(private socket: Socket) {}
 
    sendMessage(msg: string){
        this.socket.emit("test", msg);
    }
     getMessage() {
        return this.socket.fromEvent("news");
    }
}
