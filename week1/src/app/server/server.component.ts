import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-server',
    imports: [ CommonModule ],
    templateUrl: './server.component.html',
    styles: [`
        .online{
        color: white;
        }
        
        `]
})
export class ServerComponent {
    serverId: number  = 10;
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus
    }

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}