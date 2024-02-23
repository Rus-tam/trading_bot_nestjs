import { Injectable } from '@nestjs/common';
import { SocketClient } from 'src/socket/socket-client';

@Injectable()
export class BybitService {
    constructor(private readonly socketClient: SocketClient) {
    }
}
