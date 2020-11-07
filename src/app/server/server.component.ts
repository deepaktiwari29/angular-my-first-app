import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : 'server.component.html',
    styles : [`
    .online {
        color: white;
    }
    `]
})
export class ServerComponent {
    serverId: string = "101";
    serverStatus : string = "ONLINE";

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'ONLINE' : 'OFFLINE';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'ONLINE' ? "green" : "red";
    }
}