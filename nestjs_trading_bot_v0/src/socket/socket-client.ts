import { Injectable } from "@nestjs/common";
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient {
    public SocketClient: Socket;

    constructor(private readonly url: string) {
        this.SocketClient = io(this.url);
    }
}